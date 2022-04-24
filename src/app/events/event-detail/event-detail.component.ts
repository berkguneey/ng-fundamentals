import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: any;
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params['id']
    );
  }
}