import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Bitcoin } from './bitcoin';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private apiUrl = 'http://localhost:8080/api/v1/bitcoins/allbitcoins';

  constructor(private http: HttpClient) {}

  getBitcoinPrices(): Observable<Bitcoin[]> {
    return this.http.get<Bitcoin[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Bitcoin[]>('getBitcoinPrices'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T); 
    };
  }
}
