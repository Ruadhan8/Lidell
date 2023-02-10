import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { fighter } from './components/board/fighter';

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


}
