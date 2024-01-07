import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  // parent to child
  @Input() inputData: string;

  // child to parent: output and EventEmitter 
  @Output() event = new EventEmitter<string>();

  message: string = "data is sent from child component to parent using Output decorator and EventEmitter";

  sendMessage() {
    this.event.emit(this.message);
  }

  // passing data to siblings 
  message2: string = "data is sending to siblings";

  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.shared.setMessage(this.message2);
  }
}

  
