import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FighterService } from '../../fighter.service';
import { fighter } from './fighter';
import { ModalService } from '../modal';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
  template: '<p>Time remaining: {{timeRemaining}}</p>'
})


export class DailyComponent implements OnInit {

  hours!: number;
  minutes!: number;
  seconds!: number
  isActive = false;
  data: any;
  fighters: fighter[] = [];
  list: any;
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
  ){}
  

  ngOnInit() {
    this.fightersService
      .getFighters()
      .subscribe((results: any) => (this.list = results));
    

    this.startGame();
    
    setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        this.doSomethingAtMidnight();
      } else {
        this.countdownToMidnight(now);
      }
    }, 1000); // Check every second
    
  }
  doSomethingAtMidnight() {
    // Add your code to do something here
    this.startGame();
  }

  countdownToMidnight(now: Date) {
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diff = midnight.getTime() - now.getTime();

    this.hours = Math.floor(diff / (1000 * 60 * 60));
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }

  generateRandomFighter() {
    this.randomFighter =
      this.list[Math.floor(Math.random() * this.list.length)];
      this.splitRandomFighterHometown = this.randomFighter.HomeTown.split(', ');
  }


  startGame() {
    this.generateRandomFighter();
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

