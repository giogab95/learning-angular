import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-deals',
  templateUrl: './get-deals.component.html',
  styleUrls: ['./get-deals.component.scss'],
})
export class GetDealsComponent implements OnInit {
  deals: any;
  loading = false;
  upperPrice = 15;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDeals();
  }

  getDeals() {
    this.loading = true;
    const url = `https://www.cheapshark.com/api/1.0/deals?upperPrice=${this.upperPrice}`;
    return this.http.get(url).subscribe((data) => {
      let items = Object.values(data);
      this.deals = items.sort((a, b) => b.salePrice - a.salePrice);
      this.loading = false;
    });
  }
}
