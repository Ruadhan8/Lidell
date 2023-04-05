import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { io, Socket } from "socket.io-client";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private socket: any;


  constructor(public modalService: ModalService) { }

  ngOnInit(){
    this.socket = io('ws://ec2-34-253-67-221.eu-west-1.compute.amazonaws.com:3000/');
  }

}
