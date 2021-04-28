import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productName: string;
  productCost: number;
  productDescription: string;
  productImageUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let productId = +this.activatedRoute.snapshot.paramMap.get('prodId');
    console.log(productId);
    let product = this.productService.getProduct(productId);
    console.log(product);
    this.productName = product.productName;
    this.productCost = product.productCost;
    this.productDescription = product.productDescription;
    this.productImageUrl = product.productImageUrl;
  }

  updateProduct(){

  }
}
