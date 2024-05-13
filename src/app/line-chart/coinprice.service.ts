import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CoinPrice } from './CoinPrice';
import { Coin } from '../doughnut-chart/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinPriceService {

  private apiUrl = 'http://localhost:8080/api/v1/coinprices/allbitcoinsbyminute';

  constructor(private http: HttpClient) {}

  getBitcoinPrices(): Observable<CoinPrice[]> {
    return this.http.get<CoinPrice[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<CoinPrice[]>('getBitcoinPrices'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T); 
    };
  }
}
