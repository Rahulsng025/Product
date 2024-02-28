import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
 
  products: Product[] = [];
  searchTerm: string = '';
  categoryFilter: string = '';

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  navigateToHome(){
    this.router.navigate(['add-product'])
  }

}
