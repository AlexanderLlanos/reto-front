import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent {
  product: any;
  edit = false;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  onSubmit() {
    if (this.edit) {
    } else {
      this.productService.newProduct(this.product).subscribe(
        () => {
          console.log('Producto creado exitosamente');
          this.router.navigate(['/productos']);
        },
        error => console.error('Error al crear el producto:', error)
      );
    }
  }
}
