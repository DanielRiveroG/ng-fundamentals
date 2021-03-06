import { Component, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent{
    constructor(@Inject(AuthService) public auth: AuthService){
        
    }
}