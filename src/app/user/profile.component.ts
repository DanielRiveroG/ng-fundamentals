import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;

  constructor(@Inject(AuthService) private auth:AuthService, @Inject(Router) private router:Router){

  }

  ngOnInit(){
    let firstName = new FormControl(this.auth.currentUser.firstName);
    let lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName 
    })
  }

  saveProfile(formValues){
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }   
}