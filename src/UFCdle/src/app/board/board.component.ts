import { Component, OnInit } from '@angular/core';
import fighters from '../../db.json';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  list = fighters;
  searchModeOption = 'contains';
  searchExprOption: any = 'fighterName';
  searchTimeoutOption = 200;
  minSearchLengthOption = 1;
  showDataBeforeSearchOption = false;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.list.fighters.length; i++) {
      console.log(this.list.fighters[i].fighterName);
    }
  }
}
