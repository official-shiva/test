import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-angular';

  // sending this data to child component
  parentToChild = "Welcome parent to child";

  // getting data from child
  message: string;
  recieveMessage($event) {
    this.message = $event;
  }
}
