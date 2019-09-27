import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/events-detail/event-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/shared/event-route-activator.service';
import { EventsListResolver } from './events/shared/events-list-resolver.service';
import { UserModule } from './user/user.module';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'user', loadChildren: () => UserModule}
]