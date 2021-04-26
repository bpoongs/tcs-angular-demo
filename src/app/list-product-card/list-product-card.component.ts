import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-list-product-card',
  templateUrl: './list-product-card.component.html',
  styleUrls: ['./list-product-card.component.css']
})
export class ListProductCardComponent implements OnInit {

  cartProducts: Product[] = [];
  total: number = 0;
  allProducts: Product[] = [
    {
      productId: 101,
      productImageUrl: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      productName: 'Cake',
      productCost: 10,
      productDescription: 'A Delicious Cake.'
    },
    {
      productId: 102,
      productImageUrl: 'https://images.unsplash.com/photo-1565333280022-580f5c6213dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      productName: 'Oreo',
      productCost: 5,
      productDescription: 'Tasty chocolate biscuits'
    },
    {
      productId: 103,
      productImageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      productName: 'Chips',
      productCost: 2,
      productDescription: 'Crispy Chips.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product){
    this.cartProducts.push(product);
    this.total = this.total + product.productCost;
  }

  removeFromCart(productId: number){
    for( var i = 0; i < this.cartProducts.length; i++){                                
      if ( this.cartProducts[i].productId == productId) { 
          this.total = this.total - this.cartProducts[i].productCost;
          this.cartProducts.splice(i, 1); 
          break;
      }
    }
  }
}
