import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ProductDto } from '../dtos/product.dto';
import { ProductPageDto } from '../dtos/productPageDto.dto';
import { AllProductDto } from '../dtos/AllProduct.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl : string = environment.apiUrl;

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllProduct(pageALimit : ProductPageDto){
    return this.httpClient.get<AllProductDto>(`${this.apiUrl}products?page=${pageALimit.page}&limit=${pageALimit.limit}`);
  }

  getProductById(id : string){
    return this.httpClient.get<ProductDto>(`${this.apiUrl}products/${id}`);
  }
}
