import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import fighters from '../../../db.json';
import { ModalService } from '../modal/modal.service';


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
  currentFighterList: any = [];
  currentFighter = {}
  selectedItems = [];
  dropdownSettings = {};
  
  fighterList = fighters;
  searchTerm: string = "";
  
  constructor(public modalService: ModalService){}

  onValueChanged(e: any) {
  this.currentFighter = e.itemData;
  this.currentFighterList.push(this.currentFighter)
  this.currentFighter = {}
  console.log(this.currentFighter);  
  }

  

  onItemSelect(e: any) {
    this.currentFighter = e.itemData;
    this.currentFighterList.push(this.currentFighter)
    console.log(e);
  }


  ngOnInit(): void {
    for (let i = 0; i < this.list.fighters.length; i++) {
      console.log(this.currentFighter);
    }
    this.currentFighterList = []
  }
}
