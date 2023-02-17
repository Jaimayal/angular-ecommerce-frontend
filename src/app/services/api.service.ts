import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../dtos/tokenresponse';
import { UserRegister } from '../dtos/userregister';

const API_URL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<TokenResponse>(API_URL + '/oauth/login', {
      email,
      password,
    });
  }

  register(userRegister: UserRegister) {
    console.log(userRegister);
    return this.http.post<TokenResponse>(
      API_URL + '/oauth/register',
      userRegister
    );
  }

  refreshToken(token: string) {
    return this.http.post<TokenResponse>(API_URL + '/oauth/refresh', {
      token: token,
    });
  }
}
