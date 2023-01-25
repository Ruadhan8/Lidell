import { Component, OnInit } from '@angular/core';
import fighters from '../../../db.json';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  fighterList = fighters;

  constructor(public modalService: ModalService){}

  // fighterList: {
  //   fighterName: string;
  //   Division: string;
  //   Age: number;
  //   FighterReach: any;
  //   HomeTown: string;
  //   FightStyle: string;
  //   Record: string;
  //   Photo: any;
  //   Ranking: string;
  // }[] = fighters;

  ngOnInit(): void {
    console.log(this.fighterList);
  }
}
