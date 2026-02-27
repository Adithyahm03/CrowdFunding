import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppMaterialModule } from './app.material.module';

import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { TransporterComponent } from './components/transporter/transporter.component';
import { WholesalerComponent } from './components/wholesaler/wholesaler.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { PharmaComponent } from './components/pharma/pharma.component';
import { TestComponent } from './components/testcomponents/testcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdminComponent,
    SupplierComponent,
    ManufacturerComponent,
    TransporterComponent,
    WholesalerComponent,
    DistributorComponent,
    PharmaComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
