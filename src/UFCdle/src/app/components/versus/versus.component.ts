import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Socket, io, } from 'socket.io-client';


@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.scss'],
})


export class VersusComponent implements OnInit  {
  someVariable: any;
  socket: any;

  onClick(e: any){
    this.someVariable = e.target.value
    console.log(this.someVariable);
  }
  
  public ngOnInit() {
    this.socket = io('ws://ec2-34-253-67-221.eu-west-1.compute.amazonaws.com:3000/', {
      extraHeaders: { 
        'usertype': this.someVariable,

      }

    });
  }

}
