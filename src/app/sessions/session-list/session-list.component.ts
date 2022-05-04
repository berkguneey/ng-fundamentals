import { Component, Input } from '@angular/core';
import { ISession } from '../../shared/index';

@Component({
  selector: 'session-list',
  template: `
    <div class="row">
      <div class="col-12" *ngFor="let session of sessions">
        <div class="card card-body">
          <h4>{{ session.name }}</h4>
          <h6>{{ session.presenter }}</h6>
          <span>Duration:{{ session.duration }}</span>
          <span>Level:{{ session.level }}</span>
          <p>{{ session.abstract }}</p>
        </div>
      </div>
    </div>
  `,
})
export class SessionListComponent {
  @Input() sessions?: ISession[];
}
