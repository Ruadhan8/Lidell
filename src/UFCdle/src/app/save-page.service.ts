import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavePageService {
  constructor() { }

  getData(): Observable<any> {
    const storedData = localStorage.getItem('currentFighter');
    if (storedData) {
      return of(JSON.parse(storedData));
    } else {
      const data = { /* your initial data */ };
      localStorage.setItem('currentFighter', JSON.stringify(data));
      return of(data);
    }
  }
}