import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../../shared/index';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event!: IEvent;
  addMode?: boolean;
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params['id']
    );
  }
  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    const sessionModel = this.event.sessions.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );

    session.id = +sessionModel.id + 1;
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelAddSession() {
    this.addMode = false;
  }
}
