import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerlistComponent } from './container-list/container-list.component';
import { SearchComponent } from './container-list/search/search.component';
import {FormsModule } from '@angular/forms';
import { ProductlistComponent } from './container-list/productlist/productlist.component';
import { ProductComponent } from './container-list/productlist/product/product.component';
import { FilterComponent } from './container-list/productlist/filter/filter.component';
import { ProductDetailsComponent } from './container-list/product-details/product-details.component';
import { FeaturedBrandsComponent } from './container-list/featured-brands/featured-brands.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from   
    '@angular/platform-browser/animations';  
    import { MatButtonModule } from '@angular/material/button';
import { CheckoutComponent } from './checkout/checkout.component';   
import { CanActivateFn } from '@angular/router';
import {CanActivate, CanDeActivate} from './auth.guard';
import { HomeComponent } from './home/home.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'

const routes:Routes = [
  {path:'', component:HomeComponent},
{path:'products' , component:ContainerlistComponent},
{path:'products', children:[
// {path:'Checkout' , component:CheckoutComponent ,canActivate:[CanActivate]},
{path:'payment-form' ,component:PaymentformComponent  },
]},
{path: 'about' , component:AboutComponent},
{path: 'Contactus' , component:ContactUsComponent, canDeactivate:[CanDeActivate]},
{path:'login' , component:LoginComponent},
{path:'home' , component:HomeComponent},
{path:'home' , children:[
  {path:'products' , component:ContainerlistComponent},
 
]},

{path:'payment-success' , component:PaymentSuccessComponent},
{path:'payment-failed' , component:PaymentFailedComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerlistComponent,
    SearchComponent,
    ProductlistComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandsComponent,
    AboutComponent,
    ContactUsComponent,
    FooterComponent,
    LoginComponent,
    CheckoutComponent,
    HomeComponent,
    PaymentformComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
