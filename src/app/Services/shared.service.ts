import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  message: string;

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}
