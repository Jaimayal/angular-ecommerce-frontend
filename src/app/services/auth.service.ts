import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../dtos/tokenresponse';

const API_URL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<TokenResponse>(API_URL + '/oauth/login', {
      email,
      password,
    });
  }

  register(email: string, password: string) {
    return this.http.post(API_URL + '/oauth/register', {
      email,
      password,
    });
  }

  logout() {}

  refreshToken(token: string) {
    return this.http.post(API_URL + '/oauth/refresh', {
      token: token,
    });
  }
}
