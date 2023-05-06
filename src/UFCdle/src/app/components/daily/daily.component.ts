import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FightersService } from 'src/app/services/fighters.service';
import { fighter } from '../../fighter';
import { ModalService } from '../modal';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';
import { SavePageService } from 'src/app/services/save-page.service';
import { ScoreService } from 'src/app/services/score.service';
import { Score } from 'src/app/score';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
  template: '<div> {{myData}} </div>',
})
export class DailyComponent implements OnInit {
  hours!: number;
  minutes!: number;
  seconds!: number;
  isActive = false;
  data: any;
  fighters: fighter[] = [];
  list: any;
  score!: any;
  scoresFromBackend!: Score[];
  scoreRequest: Score = {
    name: '',
    playerScore: this.score,
  };
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
  splitRandomFighterHometown: string[] = [];
  splitCurrentFighterHometown: any = [];
  DivisionDict: { [key: string]: number } = {
    'Flyweight Division': 1,
    'Bantamweight Division': 2,
    'Featherweight Division': 3,
    'Lightweight Division': 4,
    'Welterweight Division': 5,
    'Middleweight Division': 6,
    'Light Heavyweight Division': 7,
    'Heavyweight Division': 8,
    "Women's Strawweight Division": 12,
    "Women's Flyweight Division": 13,
    "Women's Bantamweight Division": 14,
  };

  rankingsDict: { [key: string]: number } = {
    CHAMPION: 0,
    '#1': 1,
    '#2': 2,
    '#3': 3,
    '#4': 4,
    '#5': 5,
    '#6': 6,
    '#7': 7,
    '#8': 8,
    '#9': 9,
    '#10': 10,
    '#11': 11,
    '#12': 12,
    '#13': 13,
    '#14': 14,
    '#15': 15,
  };
  constructor(
    private FighterService: FightersService,
    public modalService: ModalService,
    private SavePageService: SavePageService,
    private scoreService: ScoreService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.FighterService.getAllFighters().subscribe(
      (results: any) => (this.list = results)
    );

    setInterval(() => {
      const now = new Date();
      if (
        now.getHours() === 0 &&
        now.getMinutes() === 0 &&
        now.getSeconds() === 0
      ) {
        localStorage.clear();
        this.showButton = true;
      } else {
        this.countdownToMidnight(now);
      }
    }, 1000); // Check every second

    this.scoreService.getAllScores().subscribe({
      next: (scores) => {
        this.scoresFromBackend = scores;
        (this.scoresFromBackend);
      },
      error: (error) => {
        (error);
      },
    });

    let searchStatus = localStorage.getItem('searchBarStatus');

    if (searchStatus) {
      this.isActive = JSON.parse(searchStatus);
      (this.isActive);
    }

    let randFighter = localStorage.getItem('saveRandomFighter');
    let randHTown = localStorage.getItem('saveRandomFighterHomeTown');
    if (randFighter) {
      this.showButton = false;
      this.randomFighter = JSON.parse(randFighter);
      (this.randomFighter);
    }
    this.splitRandomFighterHometown = this.randomFighter.homeTown.split(', ');
    if (randHTown) {
      this.splitRandomFighterHometown = JSON.parse(randHTown);
      (this.splitRandomFighterHometown);
    }

    let currFighter = localStorage.getItem('saveCurrentFighter');
    if (currFighter) {
      this.compareFighters();
      this.currentFighter = JSON.parse(currFighter);
      (this.currentFighter);
    }

    let currentHTown = localStorage.getItem('currentFighterHomeTown');

    if (currentHTown) {
      this.splitCurrentFighterHometown = JSON.parse(currentHTown);
      (this.splitCurrentFighterHometown);
    }

    let currentFighter0 = localStorage.getItem('saveCurrentFighter0');
    if (currentFighter0) {
      this.compareFighters();
      this.currentFighterList[0] = JSON.parse(currentFighter0);
      (this.currentFighterList[0]);
    }

    let currentHTown0 = localStorage.getItem('saveCurrentFighterHomeTown0');

    if (currentHTown0) {
      this.splitCurrentFighterHometown[0] = JSON.parse(currentHTown0);
      (this.splitCurrentFighterHometown[0]);
    }

    let currentFighter1 = localStorage.getItem('saveCurrentFighter1');
    if (currentFighter1) {
      this.compareFighters();
      this.currentFighterList[1] = JSON.parse(currentFighter1);
      (this.currentFighterList[1]);
    }

    let currentHTown1 = localStorage.getItem('saveCurrentFighterHomeTown1');

    if (currentHTown1) {
      this.splitCurrentFighterHometown[1] = JSON.parse(currentHTown1);
      (this.splitCurrentFighterHometown[1]);
    }

    let currentFighter2 = localStorage.getItem('saveCurrentFighter2');
    if (currentFighter2) {
      this.compareFighters();
      this.currentFighterList[2] = JSON.parse(currentFighter2);
      (this.currentFighterList[2]);
    }

    let currentHTown2 = localStorage.getItem('saveCurrentFighterHomeTown2');

    if (currentHTown2) {
      this.splitCurrentFighterHometown[2] = JSON.parse(currentHTown2);
      (this.splitCurrentFighterHometown[2]);
    }

    let currentFighter3 = localStorage.getItem('saveCurrentFighter3');
    if (currentFighter3) {
      this.compareFighters();
      this.currentFighterList[3] = JSON.parse(currentFighter3);
      (this.currentFighterList[3]);
    }

    let currentHTown3 = localStorage.getItem('saveCurrentFighterHomeTown3');

    if (currentHTown3) {
      this.splitCurrentFighterHometown[3] = JSON.parse(currentHTown3);
      (this.splitCurrentFighterHometown[3]);
    }

    let currentFighter4 = localStorage.getItem('saveCurrentFighter4');
    if (currentFighter4) {
      this.compareFighters();
      this.currentFighterList[4] = JSON.parse(currentFighter4);
      (this.currentFighterList[4]);
    }

    let currentHTown4 = localStorage.getItem('saveCurrentFighterHomeTown4');

    if (currentHTown4) {
      this.splitCurrentFighterHometown[4] = JSON.parse(currentHTown4);
      (this.splitCurrentFighterHometown[4]);
    }

    let currentFighter5 = localStorage.getItem('saveCurrentFighter5');
    if (currentFighter5) {
      this.compareFighters();
      this.currentFighterList[5] = JSON.parse(currentFighter5);
      (this.currentFighterList[5]);
    }

    let currentHTown5 = localStorage.getItem('saveCurrentFighterHomeTown5');

    if (currentHTown5) {
      this.splitCurrentFighterHometown[5] = JSON.parse(currentHTown5);
      (this.splitCurrentFighterHometown[5]);
    }

    let currentFighter6 = localStorage.getItem('saveCurrentFighter6');
    if (currentFighter6) {
      this.compareFighters();
      this.currentFighterList[6] = JSON.parse(currentFighter6);
      (this.currentFighterList[6]);
    }

    let currentHTown6 = localStorage.getItem('saveCurrentFighterHomeTown6');

    if (currentHTown6) {
      this.splitCurrentFighterHometown[6] = JSON.parse(currentHTown6);
      (this.splitCurrentFighterHometown[6]);
    }

    let currentFighter7 = localStorage.getItem('saveCurrentFighter7');
    if (currentFighter7) {
      this.compareFighters();
      this.currentFighterList[7] = JSON.parse(currentFighter7);
      (this.currentFighterList[7]);
    }

    let currentHTown7 = localStorage.getItem('saveCurrentFighterHomeTown7');

    if (currentHTown7) {
      this.splitCurrentFighterHometown[7] = JSON.parse(currentHTown7);
      (this.splitCurrentFighterHometown[7]);
    }
  }
  countdownToMidnight(now: Date) {
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const diff = midnight.getTime() - now.getTime();

    this.hours = Math.floor(diff / (1000 * 60 * 60));
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }
  generateRandomFighter() {
    this.randomFighter =
      this.list[Math.floor(Math.random() * this.list.length)];
    this.splitRandomFighterHometown = this.randomFighter.homeTown.split(', ');

    this.saveRandomFighter();
    // Method to save the randomFighter object in local storage
  }

  saveSearchBarStatus() {
    localStorage.setItem('searchBarStatus', JSON.stringify(this.isActive));
  }

  saveCurrentFighter() {
    localStorage.setItem(
      'saveCurrentFighter',
      JSON.stringify(this.currentFighter)
    );
  }

  saveCurrentFighterHomeTown() {
    localStorage.setItem(
      'currentFighterHomeTown',
      JSON.stringify(this.splitCurrentFighterHometown)
    );
  }
  saveRandomFighter() {
    localStorage.setItem(
      'saveRandomFighter',
      JSON.stringify(this.randomFighter)
    );
  }
  saveRandomFighterHomeTown() {
    localStorage.setItem(
      'saveRandomFighterHomeTown',
      JSON.stringify(this.splitRandomFighterHometown)
    );
  }

  saveCurrentFighterHomeTown0() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown0',
      JSON.stringify(this.splitCurrentFighterHometown[0])
    );
  }
  saveCurrentFighterHomeTown1() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown1',
      JSON.stringify(this.splitCurrentFighterHometown[1])
    );
  }
  saveCurrentFighterHomeTown2() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown2',
      JSON.stringify(this.splitCurrentFighterHometown[2])
    );
  }
  saveCurrentFighterHomeTown3() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown3',
      JSON.stringify(this.splitCurrentFighterHometown[3])
    );
  }

  saveCurrentFighterHomeTown4() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown4',
      JSON.stringify(this.splitCurrentFighterHometown[4])
    );
  }
  saveCurrentFighterHomeTown5() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown5',
      JSON.stringify(this.splitCurrentFighterHometown[5])
    );
  }
  saveCurrentFighterHomeTown6() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown6',
      JSON.stringify(this.splitCurrentFighterHometown[6])
    );
  }
  saveCurrentFighterHomeTown7() {
    localStorage.setItem(
      'saveCurrentFighterHomeTown7',
      JSON.stringify(this.splitCurrentFighterHometown[7])
    );
  }
  saveFighter0() {
    localStorage.setItem(
      'saveCurrentFighter0',
      JSON.stringify(this.currentFighterList[0])
    );
  }
  saveFighter1() {
    localStorage.setItem(
      'saveCurrentFighter1',
      JSON.stringify(this.currentFighterList[1])
    );
  }
  saveFighter2() {
    localStorage.setItem(
      'saveCurrentFighter2',
      JSON.stringify(this.currentFighterList[2])
    );
  }
  saveFighter3() {
    localStorage.setItem(
      'saveCurrentFighter3',
      JSON.stringify(this.currentFighterList[3])
    );
  }
  saveFighter4() {
    localStorage.setItem(
      'saveCurrentFighter4',
      JSON.stringify(this.currentFighterList[4])
    );
  }
  saveFighter5() {
    localStorage.setItem(
      'saveCurrentFighter5',
      JSON.stringify(this.currentFighterList[5])
    );
  }
  saveFighter6() {
    localStorage.setItem(
      'saveCurrentFighter6',
      JSON.stringify(this.currentFighterList[6])
    );
  }
  saveFighter7() {
    localStorage.setItem(
      'saveCurrentFighter7',
      JSON.stringify(this.currentFighterList[7])
    );
  }

  startGame() {
    this.generateRandomFighter();
    this.showButton = false;
    (this.randomFighter);
  }

  guessFighter(e: any) {
    this.currentFighter = e.itemData;
    this.compareFighters();
    this.currentFighterList.push(this.currentFighter);
    this.checkScore();
    (
      this.splitCurrentFighterHometown[1],
      this.splitRandomFighterHometown[1]
    );
    this.openModal();
    this.openFailModal();
    this.saveCurrentFighter();
    this.saveFighter0();
    this.saveFighter1();
    this.saveFighter2();
    this.saveFighter3();
    this.saveFighter4();
    this.saveFighter5();
    this.saveFighter6();
    this.saveFighter7();
    this.saveCurrentFighterHomeTown();
    this.saveCurrentFighterHomeTown0();
    this.saveCurrentFighterHomeTown1();
    this.saveCurrentFighterHomeTown2();
    this.saveCurrentFighterHomeTown3();
    this.saveCurrentFighterHomeTown4();
    this.saveCurrentFighterHomeTown5();
    this.saveCurrentFighterHomeTown6();
    this.saveCurrentFighterHomeTown7();

    if (
      this.currentFighterList.length > 7 ||
      this.currentFighter.fighterName == this.randomFighter.fighterName
    ) {
      this.isActive = true;
      this.saveSearchBarStatus();
    } else {
      this.isActive = false;
    }
  }

  checkScore() {
    if (this.currentFighterList.length == 1) {
      this.scoreRequest.playerScore = 100;
    } else if (this.currentFighterList.length == 2) {
      this.scoreRequest.playerScore = 80;
    } else if (this.currentFighterList.length == 3) {
      this.scoreRequest.playerScore = 70;
    } else if (this.currentFighterList.length == 4) {
      this.scoreRequest.playerScore = 50;
    } else if (this.currentFighterList.length == 5) {
      this.scoreRequest.playerScore = 40;
    } else if (this.currentFighterList.length == 6) {
      this.scoreRequest.playerScore = 30;
    } else if (this.currentFighterList.length == 7) {
      this.scoreRequest.playerScore = 20;
    } else if (this.currentFighterList.length == 8) {
      this.scoreRequest.playerScore = 10;
    } else {
      this.scoreRequest.playerScore = 0;
    }

    this.scoreRequest.name =
      this.authService.userData.multiFactor.user.displayName;
    (this.scoreRequest);
  }

  postScoreToTable() {
    this.scoreService.postScore(this.scoreRequest).subscribe({
      next: (score) => {
        (score);
      },
    });
  }

  compareFighters() {
    this.splitCurrentFighterHometown.push(
      this.currentFighter.homeTown.split(', ')
    );
  }

  openModal() {
    if (this.currentFighter.fighterName == this.randomFighter.fighterName) {
      this.postScoreToTable();
      return this.modalService.open('modal-2');
    } else {
      return 0;
    }
  }

  openFailModal() {
    if (
      this.currentFighterList.length >= 8 &&
      this.currentFighter.fighterName != this.randomFighter.fighterName
    ) {
      return this.modalService.open('modal-3');
    } else {
      return 0;
    }
  }
}
