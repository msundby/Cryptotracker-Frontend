import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})

export class DataDisplayComponent implements OnInit {
  private httpClient = inject(HttpClient);

  data: any = [];

ngOnInit(): void {
  this.fetchData();
}

fetchData() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': 'coinranking96ac1d6ad6e7da2f76f2fef1fa08795f31a7b92448e66176'
  });

  this.httpClient.get('https://api.coinranking.com/v2/coins', { headers })
  .subscribe((response: any) => {
    console.log(response);
    this.data = response.data.coins;
  });
  
}

}