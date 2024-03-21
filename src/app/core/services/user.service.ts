import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { loginDetailDto } from '../dtos/login.dto';
import { loginReq } from '../types/loginReq';
import { registerReq } from '../types/registerReq';
import { registerDto } from '../dtos/register.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  private readonly apiUrl : string = environment.apiUrl;
  login(loginObject : loginReq){
    return this.httpClient.post<loginDetailDto>(`${this.apiUrl}users/login`,loginObject);
  }

  register(registerValue : registerReq){
    return this.httpClient.post<registerDto>(`${this.apiUrl}users/register`,registerValue);
  }
}
