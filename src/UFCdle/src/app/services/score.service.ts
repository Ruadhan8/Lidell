import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Score } from '../score';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  
  getAllScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.baseApiUrl + '/api/score');
  }

  postScore(addScoreRequest: Score): Observable<Score> {
    return this.http.post<Score>(this.baseApiUrl + '/api/score', addScoreRequest);
  }
}
