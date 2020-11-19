
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { HorrorComponent } from './horror/horror.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { ScifiComponent } from './sci-fi/sci-fi.component';
import { DramaComponent } from './drama/drama.component';
import { CartComponent } from './cart/cart.component';
import { CartDramaComponent } from './cart-drama/cart-drama.component';
import { CartThrillerComponent } from './cart-thriller/cart-thriller.component';
import { CartScifiComponent } from './cart-scifi/cart-scifi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'product-display', component: ProductDisplayComponent, canActivate: [AuthGuard] },
  { path: 'horror', component: HorrorComponent, canActivate: [AuthGuard] },
  { path: 'thriller', component: ThrillerComponent, canActivate: [AuthGuard] },
  { path: 'sci-fi', component: ScifiComponent, canActivate: [AuthGuard] },
  { path: 'drama', component: DramaComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'cart-drama', component: CartDramaComponent, canActivate: [AuthGuard] },
  { path: 'cart-thriller', component: CartThrillerComponent, canActivate: [AuthGuard] },
  { path: 'cart-scifi', component: CartScifiComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
