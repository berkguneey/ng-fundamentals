import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <navbar></navbar>
    <event-list></event-list>
  `,
})
export class AppComponent {
  title = 'app';
}
