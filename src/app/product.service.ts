import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsPath = '/products';

  constructor(private firestore: AngularFirestore) { }
  
  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges();
  }

  addProduct(product: Product): Promise<any> {
    return this.firestore.collection('products').add(product);
  }

}
