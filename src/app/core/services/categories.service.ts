import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CategoriesDto } from '../dtos/categories.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly apiUrl : string = environment.apiUrl;

  constructor(
    private httpClient : HttpClient
  ) { }

  getCategories(){
    return this.httpClient.get<CategoriesDto[]>(`${this.apiUrl}categories`);
  }
}
