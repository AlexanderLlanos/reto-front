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
  currentPage = 1;
  itemsPerPage = 8;
  totalItems = 0;
  totalPages = 0;
  currentFilters: any = {};

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts(this.currentPage, this.itemsPerPage, this.currentFilters).subscribe(
      data => {
        this.products = data.products;
        this.totalItems = data.total;
        this.currentPage = data.currentPage;
        this.totalPages = data.totalPages;
        console.log('Productos cargados:', this.products.length);
        console.log('Total items:', this.totalItems);
        console.log('Página actual:', this.currentPage);
        console.log('Total de páginas:', this.totalPages);
      },
      error => console.error('Error al obtener productos', error)
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }

  onFiltersChanged(filters: any) {
    this.currentFilters = filters;
    this.currentPage = 1; // Reset to first page when filters change
    this.loadProducts();
  }

  getTotalPages(): number {
    return this.totalPages;
  }
}