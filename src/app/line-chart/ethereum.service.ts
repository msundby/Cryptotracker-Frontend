import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Ethereum } from './ethereum';

@Injectable({
  providedIn: 'root'
})
export class EthereumService {

  private apiUrl = 'http://localhost:8080/api/v1/ethereum/allethereum';

  constructor(private http: HttpClient) {}

  getEthereumPrices(): Observable<Ethereum[]> {
    return this.http.get<Ethereum[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Ethereum[]>('getEthereumPrices'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T); 
    };
  }
}
