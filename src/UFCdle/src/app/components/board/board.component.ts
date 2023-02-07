import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FighterService } from '../../fighter.service';
import { fighter } from './fighter';
import { ModalService } from '../modal';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
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
  }
}

