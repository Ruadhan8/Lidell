import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { io, Socket } from "socket.io-client";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

}
const socket: Socket = io('ws://ec2-34-241-144-38.eu-west-1.compute.amazonaws.com:3000/');