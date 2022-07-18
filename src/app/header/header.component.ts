import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // to make a property an event...
  // "EventEmitter" in a generic type in Ts with which we define the type of event data we are going to emit.
  // the "new EventEmitter" creates a new "event emitter" object which is created and stored in "onServerCreated"
  // "onServerCreated" in now an "event" which can be emitted
  // "event emitter" is an object in the Angular framework which allows you to emit your own events
  // @Output() makes the event listenable from outside (parent component)
  @Output('srvCreted') serverCreated = new EventEmitter<{name: string, age: number}>();

  @Input('alias') title: string

  name: "yeshwanth"
  age: 28

  constructor() { }

  ngOnInit(): void {
  }

  onServerCreated() {
    this.serverCreated.emit({name: this.name, age: this.age})
  }

}
