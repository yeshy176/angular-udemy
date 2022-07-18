import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-udemy';
  @ViewChild('emailInputReference', {static: true}) emailInputReference: ElementRef

  onButtonClick() {
    console.log(this.emailInputReference.nativeElement.value)
  }

  handleServerCreate(event: any) {
    console.log(event)
  }
}
