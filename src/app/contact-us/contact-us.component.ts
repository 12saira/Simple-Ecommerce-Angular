import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  name:string='';
  email: string='';
  message: string='';
  
  isSubmitted=false;
  
  onSubmit(){
   this.isSubmitted= true;
  }
  
  canExit(){
    if((this.name || this.email || this.message)&& (!this.isSubmitted)){
      return confirm("You have unsaved changes. Do you want to navigate away?");
     }
     else {
      return true;
    }
  }
}
