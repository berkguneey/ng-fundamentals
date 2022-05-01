import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent {
  isDirty: boolean = true;
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/events']);
  }
}
