import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../list-product-card/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProducts: Product[];
  baseUrl: string = 'assets/data/products.json';
  /*
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
  */
  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
    //return this.allProducts;
  }
}
