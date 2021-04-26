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
      productImageUrl: '',
      productName: 'Cake',
      productCost: 10,
      productDescription: 'A Delicious Strawberry Cake.'
    },
    {
      productId: 102,
      productImageUrl: '',
      productName: 'Oreo',
      productCost: 5,
      productDescription: 'Cripy chocolate biscuits'
    },
    {
      productId: 103,
      productImageUrl: '',
      productName: 'Chips',
      productCost: 2,
      productDescription: 'Crispy Chips.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteProductParent(productId){
    console.log(productId);
    for(let i=0; i<this.allProducts.length; i++){
      if(this.allProducts[i].productId==productId){
        this.allProducts.splice(i, 1);
        break;
      }
    }
  }
}
