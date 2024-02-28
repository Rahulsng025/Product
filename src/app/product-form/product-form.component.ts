import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {


  constructor(private productService: ProductService, private router: Router) {

  }

  addProduct(productData: any): void {
    this.productService.addProduct(productData);
    this.router.navigate(['product-list'])
  }

  navigateToList(){
    this.router.navigate(['product-list'])
  }


}
