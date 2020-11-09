import { Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SupplierSupportComponent } from './supplier-support/supplier-support.component';
import { SupportComponent } from './support/support.component';

export const applicationRoutes: Routes = [
    //{path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'support', component: SupportComponent, children: [
        {path: 'customer-support', component: CustomerSupportComponent},
        {path: 'supplier-support', component: SupplierSupportComponent}
    ]
},
    {path: '**', component: NotFoundComponent}
]