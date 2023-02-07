<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import fighters from '../../../db.json';
import { ModalService } from '../modal/modal.service';
=======
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FighterService } from '../../fighter.service';
import { fighter } from './fighter';
import { ModalService } from '../modal';
>>>>>>> 298bc98eb7988a685dfbcab9b55ef807934ebc4d


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
<<<<<<< HEAD
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
=======
export class BoardComponent {
  data: any;
  fighters: fighter[] = [];
  list!: any;
  currentFighter = {};
  currentFighterList: any = [];
  searchBox = ""

  constructor(private fightersService: FighterService, public modalService: ModalService) {
  }

  ngOnInit(){
    this.fightersService.getFighters().subscribe((results: any) => 
    this.list = results
    )
    console.log(this.list);
    
  }

  value(e: any){
    this.currentFighter = e.itemData;
    this.currentFighterList.push(this.currentFighter)
    console.log(this.currentFighterList);
      
  }


  onValueChanged(e: any) {
    // notify(`The value is changed to: "${e.value}"`);
>>>>>>> 298bc98eb7988a685dfbcab9b55ef807934ebc4d
  }
}

