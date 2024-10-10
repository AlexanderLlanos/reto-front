import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      error => console.error('Error al obtener productos', error)
    );
  }
}
