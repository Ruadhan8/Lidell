import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FighterService } from '../../fighter.service';
import { fighter } from './fighter';
import { ModalService } from '../modal';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
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
  splitCurrentFighterHometown: string[] = []


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
    console.log(this.splitCurrentFighterHometown);
  }

  compareFighters() {
    this.splitCurrentFighterHometown = (this.currentFighter.HomeTown.split(','))
    // let currentSplit = this.currentFighter.HomeTown.split(',');
    // this.splitCurrentFighterHometown.push(currentSplit)
  }
}
