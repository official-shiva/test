import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  message: string;

  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.message = this.shared.getMessage();
  }
}
