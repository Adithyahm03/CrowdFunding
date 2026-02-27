import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EthcontractService } from '../../ethcontract.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username = '';
  password = '';

  workflowSteps = [
    { name: 'Supplier', icon: 'agriculture' },
    { name: 'Transporter', icon: 'local_shipping' },
    { name: 'Manufacturer', icon: 'precision_manufacturing' },
    { name: 'Wholesaler', icon: 'warehouse' },
    { name: 'Distributor', icon: 'inventory' },
    { name: 'Pharma', icon: 'local_pharmacy' },
    { name: 'Customer', icon: 'person', last: true }
  ];

  constructor(
    private router: Router,
    private ethcontractService: EthcontractService
  ) { }

  scrollToLogin() {
    document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' });
  }

  quickLogin(role: string) {
    this.username = role;
    this.password = role.toLowerCase() === 'admin' ? 'admin123' : 'user123';
    // Set a session flag for the AuthGuard to allow this role locally (Demo/Quick Access)
    localStorage.setItem('sessionRole', role.toLowerCase());

    // Programmatic routing map
    const routeMap: { [key: string]: string } = {
      'admin': '/admin-dashboard',
      'supplier': '/supplier-dashboard',
      'transporter': '/transporter-dashboard',
      'manufacturer': '/manufacturer-dashboard',
      'wholesaler': '/wholesaler-dashboard',
      'distributor': '/distributor-dashboard',
      'pharma': '/pharma-dashboard'
    };

    const targetRoute = routeMap[role.toLowerCase()];
    if (targetRoute) {
      console.log('QuickLogin: Navigating to', targetRoute);
      this.router.navigate([targetRoute]);
    } else {
      this.login(); // Fallback to standard verification
    }
  }

  login() {
    if (!this.username) {
      window.alert('Please try again.');
      return;
    }

    const that = this;

    // Admin login check
    if (this.username.toLowerCase() === 'admin' && this.password === 'admin123') {
      console.log('Admin login verified.');
      this.router.navigate(['/admin-dashboard']);
      return;
    } else if (this.username.toLowerCase() === 'admin') {
      window.alert('Invalid admin password.');
      return;
    }

    // Regular User login verification
    this.ethcontractService.getRole().then((acctInfo: any) => {
      const registeredName = acctInfo.Role.Name.trim();
      const role = acctInfo.Role.Role;

      if (registeredName.toLowerCase() === that.username.toLowerCase()) {
        console.log('User login successful for role:', role);

        switch (role + '') {
          case '1':
            that.router.navigate(['/supplier-dashboard']);
            break;
          case '2':
            that.router.navigate(['/transporter-dashboard']);
            break;
          case '3':
            that.router.navigate(['/manufacturer-dashboard']);
            break;
          case '4':
            that.router.navigate(['/wholesaler-dashboard']);
            break;
          case '5':
            that.router.navigate(['/distributor-dashboard']);
            break;
          case '6':
            that.router.navigate(['/pharma-dashboard']);
            break;
          default:
            window.alert('Role not recognized in the system.');
            break;
        }
      } else {
        window.alert('Invalid username for the current MetaMask account.');
      }
    }).catch(error => {
      console.error(error);
      window.alert('Account not found in the network. If you are a new user, please contact the Admin.');
    });
  }
}
