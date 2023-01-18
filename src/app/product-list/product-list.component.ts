import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(private router: Router) {}
  products: Product[] | undefined = products;
  gotoItems(id: number) {
    this.router.navigate([`/products/${id}`]);
  }
}
