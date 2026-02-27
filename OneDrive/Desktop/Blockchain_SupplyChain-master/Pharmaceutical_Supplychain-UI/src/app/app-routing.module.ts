import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { TransporterComponent } from './components/transporter/transporter.component';
import { WholesalerComponent } from './components/wholesaler/wholesaler.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { PharmaComponent } from './components/pharma/pharma.component';
import { TestComponent } from './components/testcomponents/testcomponent.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'admin-dashboard',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'supplier-dashboard',
    component: SupplierComponent,
    canActivate: [AuthGuard],
    data: { role: 'supplier' }
  },
  {
    path: 'manufacturer-dashboard',
    component: ManufacturerComponent,
    canActivate: [AuthGuard],
    data: { role: 'manufacturer' }
  },
  {
    path: 'transporter-dashboard',
    component: TransporterComponent,
    canActivate: [AuthGuard],
    data: { role: 'transporter' }
  },
  {
    path: 'wholesaler-dashboard',
    component: WholesalerComponent,
    canActivate: [AuthGuard],
    data: { role: 'wholesaler' }
  },
  {
    path: 'distributor-dashboard',
    component: DistributorComponent,
    canActivate: [AuthGuard],
    data: { role: 'distributor' }
  },
  {
    path: 'pharma-dashboard',
    component: PharmaComponent,
    canActivate: [AuthGuard],
    data: { role: 'pharma' }
  },
  { path: 'track-meds', component: TestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
