import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
  @Input() event: any;

  applyTimeStyle() {
    if (this.event && this.event.time === '8:00 AM')
      return { color: '#003300', 'font-weight': 'bold' };
    return {};
  }
}
