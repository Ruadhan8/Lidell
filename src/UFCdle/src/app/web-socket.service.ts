import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {


  readonly uri = "http://localhost:3000";
  socket: any;

  constructor() {
    this.socket = io(this.uri);
   }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: unknown) => {
        subscriber.next(data);
      })
    });
  }
  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

}
