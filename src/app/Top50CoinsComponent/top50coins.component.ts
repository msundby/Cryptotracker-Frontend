import { Component, OnInit } from '@angular/core';
import { Coin } from './coin';
import { Top50Service } from './top50.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-top50coins',
  standalone: true,
  imports: [],
  templateUrl: './top50coins.component.html',
  styleUrl: './top50coins.component.css'
})
export class Top50CoinsComponent implements OnInit {
  
  public coins: Coin[] = [];

  constructor(private top50service: Top50Service){}

  ngOnInit(): void {
    this.getCoins();
  }

  public getCoins(): void {
    this.top50service.getTop50coins().subscribe(
      (response: Coin[]) => {
        this.coins = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}