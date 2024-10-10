import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Producto } from './interfaces/producto.interface';

interface ApiResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Producto[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  getProducts(page: number = 1, perPage: number = 10, filters: any = {}): Observable<{ products: Producto[], total: number, currentPage: number, totalPages: number }> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_per_page', perPage.toString());

    // Add filters to params
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get<ApiResponse>(this.apiUrl, { params })
      .pipe(
        map(response => ({
          products: response.data,
          total: response.items,
          currentPage: page,
          totalPages: response.pages
        }))
      );
  }

  getProduct(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}