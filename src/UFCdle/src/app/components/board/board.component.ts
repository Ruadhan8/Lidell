import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FighterService } from '../../fighter.service';
import { fighter } from 'src/app/fighter';
import { ModalService } from '../modal';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth.service';
import { Score } from 'src/app/score';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  isActive = false;
  data: any;
  fighters: any;
  fightersFromBackend: any;
  list!: any;
  score!: any;
  currentFighter: fighter = {
    fighterName: '',
    division: '',
    age: 0,
    fighterReach: 0,
    homeTown: '',
    fightStyle: '',
    record: '',
    photo: '',
    ranking: '',
  };

  scoreRequest: Score = {
    name: "",
    score: this.score

  }
  currentFighterList: any = [];
  searchBox = '';
  randomFighter: fighter = {
    fighterName: '',
    division: '',
    age: 0,
    fighterReach: 0,
    homeTown: '',
    fightStyle: '',
    record: '',
    photo: '',
    ranking: '',
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
    public authService: AuthService,
    private fightersService: FighterService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    // const obs$ = interval(1000);
    // obs$.subscribe((d) =>{
    //   console.log(d);
      
    // })

    this.fightersService
      .getFighters()
      .subscribe((results: any) => (this.list = results));

    this.fightersService.getFighters().subscribe({
      next: (fighters) => {
        console.log(fighters);
        this.fightersFromBackend = fighters
      },
      error: (error) => {
        console.log(error);
      },
      
    });
    
  }

  generateRandomFighter() {
    this.randomFighter =
      this.fightersFromBackend[Math.floor(Math.random() * this.fightersFromBackend.length)];
    this.splitRandomFighterHometown = this.randomFighter.homeTown.split(', ');
    console.log(
      this.splitRandomFighterHometown,
      this.splitCurrentFighterHometown
    );
  }

  startGame() {
    this.generateRandomFighter();
    this.showButton = false;
    console.log(this.randomFighter);
    console.log(this.fightersFromBackend);
    
  }

  guessFighter(e: any) {
    console.log(e);
    this.currentFighter = e.itemData;
    
    this.compareFighters();
    this.currentFighterList.push(this.currentFighter);
    console.log(this.score, this.authService.userData.multiFactor.user.displayName);
    
    
    
    
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
    this.checkScore();

  }

  checkScore() {
    if (this.currentFighterList.length == 1) {
      this.scoreRequest.score = 100;
    }
    else if (this.currentFighterList.length == 2) {
      this.scoreRequest.score = 80;
    } 
    else if (this.currentFighterList.length == 3) {
      this.scoreRequest.score = 70;
    }
    else if (this.currentFighterList.length == 4) {
      this.scoreRequest.score = 50;
    }
    else if (this.currentFighterList.length == 5) {
      this.scoreRequest.score = 40;
    }
    else if (this.currentFighterList.length == 6) {
      this.scoreRequest.score = 30;
    }
    else if (this.currentFighterList.length == 7) {
      this.scoreRequest.score = 20;
    }
    else if (this.currentFighterList.length == 8) {
      this.scoreRequest.score = 10;
    }
    else {
      this.scoreRequest.score = 0;
    }

    this.scoreRequest.name = this.authService.userData.multiFactor.user.displayName
    console.log(this.scoreRequest);
    
  }

  postScoreToTable() {

  }

  compareFighters() {
    this.splitCurrentFighterHometown.push(this.currentFighter.homeTown.split(', '));
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
    if(this.currentFighterList.length >= 8 && this.currentFighter.fighterName != this.randomFighter.fighterName)
    {
      return this.modalService.open('modal-3')
    }
    else{
      return 0;
    }


  }
}
// compareFighters() {
//   this.splitCurrentFighterHometown = (this.currentFighter.HomeTown.split(','))
//   this.splitRandomFighterHometown = (this.randomFighter.HomeTown.split(','))
//   this.randomFighterCity = (this.splitRandomFighterHometown[0])
//   this.randomFighterCountry = (this.splitRandomFighterHometown[1])
//   this.currentFighterCity = (this.splitCurrentFighterHometown[0])
//   this.currentFighterCountry = (this.splitCurrentFighterHometown[1])
// }
// }
var MensDivisions: string[];
MensDivisions = [
  'Flyweight Division',
  'Bantamweight Division',
  'Featherweight Division',
  'Lightweight Division',
  'Welterweight Division',
  'Middleweight Division',
  'Light Heavyweight Division',
  'Heavyweight Division',
];
