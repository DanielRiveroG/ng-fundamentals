import { Injectable, Inject } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { EventsService } from './events.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    constructor(@Inject(EventsService) private eventsService: EventsService, @Inject(Router) private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot){
        const eventExist = !!this.eventsService.getEvent(+route.params['id']);

        if(!eventExist){
            this.router.navigate(['/404']);
        }
        return eventExist;
    }
}