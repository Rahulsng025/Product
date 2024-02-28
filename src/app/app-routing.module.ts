import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'add-product', component: ProductFormComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: '', redirectTo: '/add-product', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
