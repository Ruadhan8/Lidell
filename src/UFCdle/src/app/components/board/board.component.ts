import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FighterService } from '../../fighter.service';
import { fighter } from './fighter';
import { ModalService } from '../modal';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { triggerHandler } from 'devextreme/events';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  isActive = false;
  data: any;
  fighters: fighter[] = [];
  list!: any;
  currentFighter: fighter = {
    fighterName: '',
    Division: '',
    Age: 0,
    FighterReach: 0,
    HomeTown: '',
    FightStyle: '',
    Record: '',
    Photo: '',
    Ranking: '',
  };
  currentFighterList: any = [];
  searchBox = '';
  randomFighter: fighter = {
    fighterName: '',
    Division: '',
    Age: 0,
    FighterReach: 0,
    HomeTown: '',
    FightStyle: '',
    Record: '',
    Photo: '',
    Ranking: '',
  };

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  showButton: boolean = true;
  splitRandomFighterHometown: string[] = []
  splitCurrentFighterHometown: any = []
  DivisionDict: { [key: string]: number }= {
    "Flyweight Division": 1,
    "Bantamweight Division": 2,
    "Featherweight Division": 3,
    "Lightweight Division": 4,
    "Welterweight Division": 5, 
    "Middleweight Division": 6, 
    "Light Heavyweight Division": 7,
    "Heavyweight Division": 8,
    "Women's Strawweight Division": 12,
    "Women's Flyweight Division": 13,
    "Women's Bantamweight Division": 14
}

rankingsDict: {[key:string]: number} ={
  "CHAMPION": 0,
  "#1": 1,
  "#2": 2,
  "#3": 3,
  "#4": 4,
  "#5": 5,
  "#6": 6,
  "#7": 7,
  "#8": 8,
  "#9": 9,
  "#10": 10,
  "#11": 11,
  "#12": 12,
  "#13": 13,
  "#14": 14,
  "#15": 15,
}

  constructor(
    private fightersService: FighterService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.fightersService
      .getFighters()
      .subscribe((results: any) => (this.list = results));
    
  }

  generateRandomFighter() {
    this.randomFighter =
      this.list[Math.floor(Math.random() * this.list.length)];
      this.splitRandomFighterHometown = this.randomFighter.HomeTown.split(', ');
    console.log(this.splitRandomFighterHometown, this.splitCurrentFighterHometown);
    
      
  }

  startGame() {
    this.generateRandomFighter();
    this.showButton = false;
    console.log(this.randomFighter);
  }

  guessFighter(e: any) {
    this.currentFighter = e.itemData;
    this.compareFighters();
    this.currentFighterList.push(this.currentFighter);
    console.log(this.splitCurrentFighterHometown[1], this.splitRandomFighterHometown[1]);
    this.openModal();
    this.openFailModal();

    if(this.currentFighterList.length > 7 || this.currentFighter.fighterName == this.randomFighter.fighterName){
      this.isActive = true;
      console.log("isActive");
    }
    else{
      this.isActive = false;
    }
  }
  compareFighters() {
    this.splitCurrentFighterHometown.push(this.currentFighter.HomeTown.split(', '));
  }

  openModal() {
    if(this.currentFighter.fighterName == this.randomFighter.fighterName)
    {
      return this.modalService.open('modal-2');
    }
    else{
      return 0;
    }
  }

  openFailModal(){
    if(this.currentFighterList.length > 7 && this.currentFighter.fighterName != this.randomFighter.fighterName)
    {
      return this.modalService.open('modal-3')
    }
    else{
      return 0;
    }


  }
}
