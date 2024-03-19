import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from './coin';

@Injectable({
  providedIn: 'root'
})
export class Top50Service {

  private apiUrl = 'http://localhost:8080/api/v1/coins/allcoins';

  constructor(private http: HttpClient) {}

  getTop50coins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.apiUrl);
  }
}