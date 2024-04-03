import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './NavbarComponent/navbar.component';
import { DataDisplayComponent } from './DataDisplayComponent/data-display.component';
import { Coin } from './Top50CoinsComponent/coin';
import { Top50Service } from './Top50CoinsComponent/top50.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Top50CoinsComponent } from './Top50CoinsComponent/top50coins.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DataDisplayComponent, Top50CoinsComponent, LineChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = "WebSocketClient";
  coin: any = {};

  private webSocket: WebSocket;

  constructor() {
    this.webSocket = new WebSocket("ws://localhost:8080/price");
    this.webSocket.onmessage = (event) => {
      this.coin = JSON.parse(event.data)
    };
  }
}
