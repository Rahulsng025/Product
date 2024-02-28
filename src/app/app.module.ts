import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CategoryFilterPipe } from './pipes/category-filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductListComponent,
    FilterPipe,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
