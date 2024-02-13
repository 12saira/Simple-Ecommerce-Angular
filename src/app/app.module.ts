import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerlistComponent } from './container-list/container-list.component';
import { SearchComponent } from './container-list/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './container-list/productlist/productlist.component';
import { ProductComponent } from './container-list/productlist/product/product.component';
import { FilterComponent } from './container-list/productlist/filter/filter.component';
import { ProductDetailsComponent } from './container-list/product-details/product-details.component';
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
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
