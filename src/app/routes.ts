import { Routes } from '@angular/router';
import { Error404Component } from './shared/components/errors/404.component';

import {
  EventListComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventRouteActivator,
  EventListResolver,
} from './events/index';

import { SessionCreateComponent } from './sessions/index';

export const appRoutes: Routes = [
  {
    path: 'events/create',
    component: EventCreateComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivator],
  },
  {
    path: 'events/session/create',
    component: SessionCreateComponent,
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
