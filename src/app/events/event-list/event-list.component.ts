import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-6" *ngFor="let event of events">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent implements OnInit {
  events!: any[];
  constructor(
    private eventService: EventService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.notificationService.showSuccess(eventName);
  }
}
