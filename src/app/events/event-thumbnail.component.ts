import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent{
    @Input('event') event: IEvent;

    getTimeStyle(){
        if(this.event.time === '8:00 am'){
            return {color: 'green', 'font-weight': 'bold'};
        }
        return {};
    }
}