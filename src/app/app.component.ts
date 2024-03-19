import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './NavbarComponent/navbar.component';
import { DataDisplayComponent } from './DataDisplayComponent/data-display.component';
import { Coin } from './Top50CoinsComponent/coin';
import { Top50Service } from './Top50CoinsComponent/top50.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Top50CoinsComponent } from './Top50CoinsComponent/top50coins.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, DataDisplayComponent, Top50CoinsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
