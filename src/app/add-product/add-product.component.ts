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
      id: 0,
      productImageUrl: this.productImageUrl,
      productName: this.productName,
      productCost: this.productCost,
      productDescription: this.productDescription
    };

    this.productService.getAllProducts().subscribe(
      (response) => {
        console.log(response);
        product.id = response[response.length-1].id + 1;
        this.productService.addProduct(product).subscribe(
          (response) => this.router.navigate(['list-product-card'])
        );
      }
    );    

    //this.productService.addProduct(product);
    //this.router.navigate(['list-product-card']);

  }
}
