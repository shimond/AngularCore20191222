import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private productServiceUrl = environment.serverUrl + '/products';

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productServiceUrl);
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.productServiceUrl}/${id}`);
    }

    // updateProduct(p: Product): Promise<Product> {

    // }

    constructor(private http: HttpClient) { }
}
