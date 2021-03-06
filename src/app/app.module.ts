import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventRouteActivator,
  EventListResolver,
} from './events/index';

import { SessionCreateComponent, SessionListComponent } from './sessions/index';

import {
  NavbarComponent,
  EventService,
  NotificationService,
  Error404Component,
} from './shared/index';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    EventCreateComponent,
    SessionCreateComponent,
    SessionListComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    NotificationService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
