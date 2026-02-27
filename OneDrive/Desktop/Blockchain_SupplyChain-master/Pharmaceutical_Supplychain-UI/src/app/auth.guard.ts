import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EthcontractService } from './ethcontract.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private ethcontractService: EthcontractService,
    private router: Router
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const requiredRole = next.data.role;
    console.log('AuthGuard: Checking access for role:', requiredRole);

    if (!requiredRole) return true;

    // Demo/Session override
    const sessionRole = localStorage.getItem('sessionRole');
    if (sessionRole === requiredRole) {
      console.log('AuthGuard: Access granted via sessionRole (Demo Mode)');
      return true;
    }

    try {
      if (requiredRole === 'admin') {
        const ownerInfo: any = await this.ethcontractService.getOwner();
        console.log('AuthGuard: Admin check result:', ownerInfo);
        if (ownerInfo.Role === 'Success') return true;
      } else {
        const acctInfo: any = await this.ethcontractService.getRole();
        console.log('AuthGuard: User info result:', acctInfo);

        const roleMapping: { [key: string]: string } = {
          '1': 'supplier',
          '2': 'transporter',
          '3': 'manufacturer',
          '4': 'wholesaler',
          '5': 'distributor',
          '6': 'pharma'
        };

        const userRoleNum = acctInfo.Role.Role + '';
        const userRole = roleMapping[userRoleNum];

        console.log('AuthGuard: Mapped user role:', userRole);

        if (userRole === requiredRole) return true;
      }
    } catch (e) {
      console.error('AuthGuard: Error during role verification:', e);
    }

    console.warn('AuthGuard: Access Denied to', state.url);

    Swal.fire(
      'Access Denied',
      `Your blockchain account is not authorized as a ${requiredRole}.`,
      'error'
    );

    return false;
  }
}
