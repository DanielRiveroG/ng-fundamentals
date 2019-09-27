import { Component, Inject } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent{
    events: IEvent[];
    constructor (@Inject(ActivatedRoute) private route: ActivatedRoute, @Inject(ToastrService) private toastrService: ToastrService){
    }

    ngOnInit(){
      this.events = this.route.snapshot.data['events'];
    }

    showToast(eventName){
      this.toastrService.success(eventName);
    }
}