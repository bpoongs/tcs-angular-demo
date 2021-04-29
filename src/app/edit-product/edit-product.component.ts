import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  editForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      id: new FormControl(),
      productName: new FormControl(),
      productCost: new FormControl(),
      productDescription: new FormControl(),
      productImageUrl: new FormControl()
    });
    let productId = +this.activatedRoute.snapshot.paramMap.get('prodId');
    console.log(productId);
    /*
    let product = this.productService.getProduct(productId);
    console.log(product);
    this.productName = product.productName;
    this.productCost = product.productCost;
    this.productDescription = product.productDescription;
    this.productImageUrl = product.productImageUrl;
    */
   this.productService.getProduct(productId).subscribe(
     (response) => {
       console.log(response);
       this.editForm.setValue(response);
     }
   )
  }

  updateProduct(){

  }
}
