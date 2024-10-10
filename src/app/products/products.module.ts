import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormController } from './product-form/product-form.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFormController,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
