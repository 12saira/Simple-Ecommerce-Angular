import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router";
import { ContactUsComponent } from "./contact-us/contact-us.component";

export const CanActivate=()=>{
const authService = inject(AuthService);
const router = inject(Router)

    if(authService.isAuthenticated()){
        return true;
    }
    else{
        router.navigate(['login']);
        return false;
    }
}

export const CanDeActivate= (comp:ContactUsComponent)=>{
    return comp.canExit();
}