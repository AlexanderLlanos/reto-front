import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      id: [''],
      name: [''],
      categorie: ['']
    });
  }

  applyFilters() {
    this.filtersChanged.emit(this.filterForm.value);
  }

  clearFilters() {
    this.filterForm.reset();
    this.filtersChanged.emit({});
  }
}