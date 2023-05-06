import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal';
import { ScoreService } from 'src/app/services/score.service';
import { Score } from 'src/app/score';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  scoresFromBackend: Score[] = [];
  sortedScores: Score[] = [];

  constructor(public modalService: ModalService, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.getAllScores().subscribe({
      next: (scores) => {
        this.scoresFromBackend = scores;
        // console.log(this.scoresFromBackend);
        this.getSortedScores() 
      },
      error: (error) => {
        console.log(error);
      },
    });
    console.log(this.scoresFromBackend);
  }

  getSortedScores() {
    this.sortedScores = this.scoresFromBackend.sort((n1: Score,n2: Score) => {
      if (n1.playerScore > n2.playerScore) {
        return -1
      }
      if (n1.playerScore < n2.playerScore) {
        return 1
    }
    return 0
  });
    return this.sortedScores;
  }

}

