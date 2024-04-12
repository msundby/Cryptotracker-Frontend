import { Component, OnInit } from '@angular/core';
import { Coin } from './coin';
import { Top50Service } from './top50.service';
import { HttpErrorResponse } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-top50coins',
  standalone: true,
  imports: [],
  templateUrl: './top50coins.component.html',
  styleUrl: './top50coins.component.css'
})
export class Top50CoinsComponent implements OnInit {
  
  public chart: any;
  public coins: Coin[] = [];

  constructor(private top50service: Top50Service){}

  ngOnInit(): void {
    this.getCoins();
  }

  public getCoins(): void {
    this.top50service.getTop50coins().subscribe(
      (response: Coin[]) => {
        this.coins = response;
        this.createChart();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  createChart(){
    const firstTenCoins = this.coins.slice(0, 15); // Get the first 10 elements
    const coinNames = firstTenCoins.map(coin => coin.symbol);
    const coinPrices = firstTenCoins.map(coin => coin.marketCap);
    const coinColors = firstTenCoins.map(coin=> coin.color);

    this.chart = new Chart("doughnut", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: coinNames,
	       datasets: [{
    label: 'Coinprice times circulating coins',
    data: coinPrices,
    backgroundColor: coinColors,
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2
      }

    });
  }

}