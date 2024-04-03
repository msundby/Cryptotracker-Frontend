import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BitcoinService } from './bitcoin.service';
import { Bitcoin } from './bitcoin';
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
  bitcoinPrices: Bitcoin[] = [];

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.fetchBitcoinPrices();
  }

  fetchBitcoinPrices() {
    this.bitcoinService.getBitcoinPrices()
      .subscribe(prices => {
        this.bitcoinPrices = prices;
        this.createChart();
      });
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.bitcoinPrices.map(bitcoin => format(new Date(bitcoin.createDate),'dd/MM/yyyy'));
    const prices = this.bitcoinPrices.map(bitcoin => bitcoin.price);

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: "Bitcoin Price",
            data: prices,
            backgroundColor: 'blue'
          }
        ]
      }
    });
  }
}
