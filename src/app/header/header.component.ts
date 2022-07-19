import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoggingService]
})
export class HeaderComponent {  

  constructor(private loggingService: LoggingService) { 
    console.log("constructor called")
  }

  handleAccountCreated(accountStatus: string) {
    this.loggingService.logStatusChange(accountStatus)
  }

}
