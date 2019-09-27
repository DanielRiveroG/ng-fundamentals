import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailComponent } from './events/events-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/shared/event-route-activator.service';
import { EventsListResolver } from './events/shared/events-list-resolver.service';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    Error404Component,
    CreateEventComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventsService, ToastrService, EventRouteActivator, EventsListResolver, {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm("The new event data is not saved, do you want to exit?");
  }
  return true;
}