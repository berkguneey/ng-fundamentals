import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail//event-thumbnail.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EventService } from './shared/services/event.service';
import { NotificationService } from './shared/services/notification.service';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
  ],
  providers: [EventService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
