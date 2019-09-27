import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-event.component.html',
})
export class CreateEventComponent{
    isDirty: boolean = true;
    constructor(@Inject(Router) private roter:Router){

    }

    cancel(){
        this.roter.navigate(['/events']);
    }
}