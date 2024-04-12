import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BitcoinService } from './bitcoin.service';
import { Bitcoin } from './bitcoin';
import { format } from 'date-fns';
import { EthereumService } from './ethereum.service';
import { Ethereum } from './ethereum';

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
  ethereumPrices: Ethereum[] = [];

  constructor(private bitcoinService: BitcoinService, private ethereumService: EthereumService) {}

  ngOnInit(): void {
    this.fetchBitcoinPrices();
    this.fetchEthereumPrices();
  }

  fetchBitcoinPrices() {
    this.bitcoinService.getBitcoinPrices()
      .subscribe(prices => {
        this.bitcoinPrices = prices;
        this.createChart();
      });
  }

  fetchEthereumPrices() {
    this.ethereumService.getEthereumPrices()
      .subscribe(prices => {
        this.ethereumPrices = prices;
        this.createChart();
      });
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const bitcoinLabels = this.bitcoinPrices.map(bitcoin => format(new Date(bitcoin.createDate),'dd/MM'));
    const bitcoinPrices = this.bitcoinPrices.map(bitcoin => bitcoin.price);

    // const ethereumLabels = this.ethereumPrices.map(ethereum => format(new Date(ethereum.createDate), 'dd/MM'));
    const ethereumPrices = this.ethereumPrices.map(ethereum => ethereum.price);

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
