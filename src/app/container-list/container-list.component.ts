import { Component } from '@angular/core';

@Component({
  selector: 'container-list',
  templateUrl: './container-list.component.html',
  styleUrl: './container-list.component.css'
})
export class ContainerlistComponent {
  listOfString: string[]= ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];  
  searchText: string='';
  setSearchText(value: string){
 this.searchText=value;
  }

    }
  
  

