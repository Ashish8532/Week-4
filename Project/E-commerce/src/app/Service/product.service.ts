import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private productSubject$ = new BehaviorSubject<any[]>([]);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private products: Product[] = []; // Array to store local posts
  

  constructor(private httpClient: HttpClient) {
    this.fetchProducts();
  }
  getProducts(): Observable<Product[]> {
    return this.productSubject$.asObservable();
  }

  fetchProducts() {
    this.httpClient.get<Product[]>(this.apiUrl).pipe(
      tap((product) => {
        this.products = product;
        this.productSubject$.next([...this.products]);
      })
    ).subscribe();
  }

  getProductById(productId: number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.httpClient.get<any>(url);
  }

  getAllCategories(): Observable<string[]> {
    return this.getProducts().pipe(
      map((products: any[]) => {
        const categoriesSet = new Set<string>();
        products.forEach(product => categoriesSet.add(product.category));
        return Array.from(categoriesSet);
      })
    );
  }
}
