import { Component, ViewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'container-list',
  templateUrl: './container-list.component.html',
  styleUrl: './container-list.component.css'
})
export class ContainerlistComponent {
  listOfString: string[]= ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];  
  searchText: string='';

@ViewChild('productlist')productListComponent: ProductlistComponent;


  setSearchText(value: string){
 this.searchText=value;
  }

    }
  
  

