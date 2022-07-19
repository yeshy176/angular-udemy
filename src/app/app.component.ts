import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'angular-udemy';
  @ViewChild('emailInputReference', {static: true}) emailInputReference: ElementRef

  handleTitleChange() {
    this.title = 'Title has been changed'
  }

  handleServerCreate(event: any) {
    console.log(event)
  }
}
