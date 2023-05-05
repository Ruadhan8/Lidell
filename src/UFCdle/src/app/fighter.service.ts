import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { fighter } from './fighter';
import { Score } from './score';
@Injectable({
  providedIn: 'root'
})
export class FighterService {

  private apiURL = 'http://localhost:5000/fighters'
  fighters: fighter[] = []
  constructor(private http: HttpClient) { }

  getFighters(): Observable<fighter[]>{
    return this.http.get<fighter[]>(this.apiURL)
  }

  postScore(addScoreRequest: Score ): Observable<Score> {
    return this.http.post<Score>(this.apiURL, addScoreRequest)
  }


}
