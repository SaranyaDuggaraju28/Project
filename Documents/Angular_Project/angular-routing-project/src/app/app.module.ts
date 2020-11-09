import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { applicationRoutes } from './app-routing.module';
import { SupportComponent } from './support/support.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { SupplierSupportComponent } from './supplier-support/supplier-support.component'

@NgModule({
  declarations: [
    
  MainComponent,
    
  HomeComponent,
    
  AboutComponent,
    
  ContactComponent,
    
  SupportComponent,
    
  NotFoundComponent,
    
  CustomerSupportComponent,
    
  SupplierSupportComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
