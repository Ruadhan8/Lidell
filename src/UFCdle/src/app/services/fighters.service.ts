import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { fighter } from '../fighter';

@Injectable({
  providedIn: 'root',
})
export class FightersService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllFighters(): Observable<fighter[]> {
    {
      return this.http.get<fighter[]>(this.baseApiUrl + '/api/fighters');
    }
  }
}
