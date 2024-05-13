import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CoinPriceService } from './coinprice.service';
import { CoinPrice } from './CoinPrice';
import { format } from 'date-fns';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public chart: any;
  bitcoinPrices: CoinPrice[] = [];

  constructor(private coinPriceService: CoinPriceService) {}

  ngOnInit(): void {
    this.fetchBitcoinPrices();

  }

  fetchBitcoinPrices() {
    this.coinPriceService.getBitcoinPrices()
      .subscribe(prices => {
        this.bitcoinPrices = prices;
        this.createChart();
      });
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const bitcoinLabels = this.bitcoinPrices.map(bitcoin => format(new Date(bitcoin.createDate),'HH:mm'));
    const bitcoinPrices = this.bitcoinPrices.map(bitcoin => bitcoin.price);

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: bitcoinLabels,
        datasets: [
          {
            label: "Bitcoin Price",
            data: bitcoinPrices,
            backgroundColor: 'blue'
          },
          // {
          //   label: "Ethereum Prices",
          //   data: ethereumPrices,
          //   backgroundColor: 'green'
          // },
          // {
          //   label: "Ethereum Price",  // Add a new dataset for Ethereum
          //   data: ethereumPrices,
          //   backgroundColor: 'green'  // You can choose a different color
          // }
        ]
      }
    });
  }
}
