import { Component, Inject } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left:10px }
    `]    
})

export class LoginComponent{
    constructor(@Inject(AuthService) private authService: AuthService, @Inject(Router) private router:Router){
        
    }

    login(formData, form){
        this.authService.loginUser(formData.username, formData.password);
        this.router.navigate(['events']);
        console.log(form.controls.userName.valid);
    }

    cancel(){
        this.router.navigate(['events']);
    }
}