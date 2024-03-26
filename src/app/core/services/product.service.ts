import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ProductDto } from '../dtos/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl : string = environment.apiUrl;

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllProduct(){
    return this.httpClient.get<{ products: ProductDto[], totalPage: number }>(`${this.apiUrl}products`);
  }
}
