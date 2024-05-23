import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private matsnackService: MatSnackBar
  ){}
  @ViewChild('username')username!: ElementRef;
  @ViewChild('password') password!: ElementRef;
 
authService: AuthService = inject(AuthService);
router: Router = inject(Router);
activeRoute: ActivatedRoute = inject(ActivatedRoute);

ngOnInit(){
  this.activeRoute.queryParamMap.subscribe((queries)=>{
    const logout = Boolean(queries.get('logout'));
    if(logout){
      this.authService.logout();
      const message = 'You are logged out';
      const action = 'IsLogged: ' +this.authService.isLogged;
      this.openSnackBar(message,action);
    }
  })
}


openSnackBar(message: string, action: string) { 
  this.matsnackService.open(message, action, { 
    duration: 6000, 
    verticalPosition: 'top',
    panelClass: ['green-snackbar']
    
  }); 
} 

onLoginClick(){
  const username = this.username.nativeElement.value;
  const password= this.password.nativeElement.value;
  
  const user= this.authService.login(username,password);
  
  
  if(user === undefined ){
    alert("The login credentials you have entered is not correct.")
  }
  else{
    const message = 'Welcome ' + user.name + ' You are logged in';
    const action = "Success"
    this.openSnackBar(message, action);
   
    localStorage.setItem('name',user.name);
    this.router.navigate(['products']);
  }
}
}
