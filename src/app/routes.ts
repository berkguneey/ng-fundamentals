import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';

export const appRoutes: Routes = [
  { path: 'events/create', component: EventCreateComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
