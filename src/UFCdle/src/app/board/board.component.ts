import { Component, OnInit } from '@angular/core';
import  db  from "/db.json" 

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  fighterList:{fighterName: string, Division:string, Age: string, FighterReach:number, HomeTown: string, FightStyle: string, Record: string, Ranking: string}[]=db

  ngOnInit(): void {
  }

}
