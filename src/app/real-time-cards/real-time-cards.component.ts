import { Component } from '@angular/core';

@Component({
  selector: 'app-real-time-cards',
  standalone: true,
  imports: [],
  templateUrl: './real-time-cards.component.html',
  styleUrl: './real-time-cards.component.css'
})
export class RealTimeCardsComponent {

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

