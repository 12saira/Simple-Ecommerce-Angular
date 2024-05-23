import { Component, inject } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductlistComponent } from '../container-list/productlist/productlist.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
activeRoute: ActivatedRoute = inject(ActivatedRoute);
router:Router = inject(Router);
product:Product;


ngOnInit(){
  this.product = history.state;
  console.log(this.product)
}
}
