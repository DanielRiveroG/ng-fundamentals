import { Resolve } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { EventsService } from './events.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsListResolver implements Resolve<any>{
    constructor(@Inject(EventsService) private service: EventsService){

    }

    resolve(){
        return this.service.getEvents().pipe(map(events => events))
    }
}