import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  allProducts: Product[] = [
    {
      productId: 101,
      productName: 'Cake',
      productCost: 10,
      productDescription: 'A Delicious Strawberry Cake.'
    },
    {
      productId: 102,
      productName: 'Oreo',
      productCost: 5,
      productDescription: 'Cripy chocolate biscuits'
    },
    {
      productId: 103,
      productName: 'Chips',
      productCost: 2,
      productDescription: 'Crispy Chips.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
