import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../shared/services/event.service';
import { ISession } from '../../shared/index';

@Component({
  selector: 'session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css'],
})
export class SessionCreateComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues) {
    let session: ISession = {
      id: 0,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
