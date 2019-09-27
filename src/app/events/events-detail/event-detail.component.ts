import { Component, Inject } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent{
    event: IEvent;

    constructor (@Inject(EventsService) private eventsService: EventsService, @Inject(ActivatedRoute) private route: ActivatedRoute){
    }

    ngOnInit(){
      this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
    }
}