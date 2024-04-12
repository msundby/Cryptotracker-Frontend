import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DataDisplayComponent } from './angular-only-api/data-display.component';
import { Top50CoinsComponent } from './doughnut-chart/top50coins.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RealTimeCardsComponent } from './real-time-cards/real-time-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DataDisplayComponent, Top50CoinsComponent, LineChartComponent, RealTimeCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
