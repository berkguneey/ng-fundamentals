import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail//event-thumbnail.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EventService } from './shared/services/event.service';
import { NotificationService } from './shared/services/notification.service';
import { EventDetailComponent } from './events/event-detail//event-detail.component';
import { EventCreateComponent } from './events/event-create//event-create.component';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
  ],
  providers: [EventService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
