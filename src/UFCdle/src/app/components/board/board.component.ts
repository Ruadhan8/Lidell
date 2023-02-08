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

  showUpArrow = false;
  showDownArrow = false;
  showButton: boolean = true;
  correctAge: boolean = false;
  closeAge: boolean = false;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;


  constructor(
    private fightersService: FighterService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.fightersService
      .getFighters()
      .subscribe((results: any) => (this.list = results));
      console.log(this.closeAge, this.correctAge);
      
  }

  generateRandomFighter() {
    this.randomFighter =
      this.list[Math.floor(Math.random() * this.list.length)];
  }

  startGame() {
    this.showButton = false;
    this.generateRandomFighter();
    console.log(this.randomFighter);
  }

  guessFighter(e: any) {
    this.currentFighter = e.itemData;
    this.compareFighters();
    this.currentFighterList.push(this.currentFighter);
    console.log(this.randomFighter);
    console.log(this.currentFighterList);
    console.log(this.closeAge, this.correctAge);

  }

  compareFighters() {
    if (this.randomFighter === this.currentFighter) {
      console.log('you win');
    }
    if (this.currentFighter.Age === this.randomFighter.Age) {
      this.correctAge = true;
      this.closeAge = true;
      
    }
    if (
      this.randomFighter.Age - 2 === this.currentFighter.Age ||
      this.randomFighter.Age - 1 === this.currentFighter.Age
    ) {
      this.closeAge = true;
      this.showDownArrow = true;
      console.log("age is down");
      
    }
    if (
      this.randomFighter.Age + 2 === this.currentFighter.Age ||
      this.randomFighter.Age + 1 === this.currentFighter.Age
    ) {
      this.closeAge = true;
      this.showUpArrow = true;
      console.log("age is up");
      
    }
    // this.closeAge = false;
    // this.correctAge = false;

  }
}
