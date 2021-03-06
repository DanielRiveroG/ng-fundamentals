import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left:10px }
    .error input { background-color: #E3C3C5; }
`]    
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(@Inject(AuthService) private auth:AuthService, @Inject(Router) private router:Router){

  }

  ngOnInit(){
    this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName 
    })
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  cancel(){
    this.router.navigate(['events']);
  }
  
  validateFirstName(){
    return this.firstName.valid || this.firstName.touched;
  }
  
  validateLastName(){
    return this.lastName.valid || this.lastName.touched;
  }
}