import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName: string;
  productCost: number;
  productDescription: string;
  productImageUrl: string;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    let product = {
      productId: 0,
      productImageUrl: this.productImageUrl,
      productName: this.productName,
      productCost: this.productCost,
      productDescription: this.productDescription
    }
    console.log(product);
    this.productService.addProduct(product);

    this.router.navigate(['list-product-card']);

  }
}
