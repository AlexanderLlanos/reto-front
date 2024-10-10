import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-producto-formulario',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormController implements OnInit {
  productoForm: FormGroup;
  edit = false;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required, Validators.min(0)]],
      categorie: ['', Validators.required],
      mark: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      newDate: [new Date().toISOString().split('T')[0], Validators.required],
      imageUrl: ['https://picsum.photos/600/600', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.productoForm.valid) {
      const producto: Producto = this.productoForm.value;
      this.productoService.crearProducto(producto).subscribe(
        (nuevoProducto: Producto) => {
          console.log('Producto creado exitosamente:', nuevoProducto);
          this.router.navigate(['/productos']);
        },
        error => console.error('Error al crear el producto:', error)
      );
    } else {
      Object.values(this.productoForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  isFieldValid(field: string) {
    const control = this.productoForm.get(field);
    return control && control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(field: string) {
    const control = this.productoForm.get(field);
    if (control) {
      if (control.hasError('required')) {
        return 'Este campo es obligatorio';
      }
      if (control.hasError('minlength')) {
        const minLength = control.errors?.['minlength'].requiredLength;
        return `Debe tener al menos ${minLength} caracteres`;
      }
      if (control.hasError('min')) {
        return 'El valor debe ser mayor o igual a 0';
      }
    }
    return '';
  }
}