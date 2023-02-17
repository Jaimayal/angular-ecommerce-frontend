import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../dtos/tokenresponse';
import { UserRegister } from '../dtos/userregister';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  login(email: string, password: string) {
    this.apiService
      .login(email, password)
      .subscribe((tokenResponse: TokenResponse) => {
        const token = tokenResponse.token;
        const tokenType = tokenResponse.tokenType;

        this.storageService.setToken(token);
        this.storageService.setTokenType(tokenType);
      });
  }

  register(userRegister: UserRegister) {
    this.apiService
      .register(userRegister)
      .subscribe((tokenResponse: TokenResponse) => {
        const token = tokenResponse.token;
        const tokenType = tokenResponse.tokenType;

        this.storageService.setToken(token);
        this.storageService.setTokenType(tokenType);
      });
  }

  refreshToken() {
    const token = this.storageService.getToken() as string;

    this.apiService
      .refreshToken(token)
      .subscribe((tokenResponse: TokenResponse) => {
        const token = tokenResponse.token;
        const tokenType = tokenResponse.tokenType;

        this.storageService.setToken(token);
        this.storageService.setTokenType(tokenType);
      });
  }

  logout() {
    this.storageService.removeToken();
  }
}
