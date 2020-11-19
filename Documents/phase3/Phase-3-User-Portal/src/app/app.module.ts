import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { HorrorComponent } from './horror/horror.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { ScifiComponent } from './sci-fi/sci-fi.component';
import { DramaComponent } from './drama/drama.component';
import { CartComponent } from './cart/cart.component';
import { HorrorService } from './HorrorService';
import { CartDramaComponent } from './cart-drama/cart-drama.component';
import { CartScifiComponent } from './cart-scifi/cart-scifi.component';
import { CartThrillerComponent } from './cart-thriller/cart-thriller.component';
import { DramaService } from './DramaService';
import { ScifiService } from './ScifiService';
import { ThrillerService } from './ThrillerService';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    CompaniesListComponent,
    ProductDisplayComponent,
    HorrorComponent,
    ThrillerComponent,
    ScifiComponent,
    DramaComponent,
    CartComponent,
    CartDramaComponent,
    CartScifiComponent,
    CartThrillerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [HorrorService,DramaService,ScifiService,ThrillerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
