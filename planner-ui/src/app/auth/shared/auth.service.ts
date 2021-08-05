import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegistrationRequestPayload } from '../registration/registration-request.payload';
import { LoginRequestPayload } from '../login/login-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { LocalStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  refreshToken() {
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUserName()
    }
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token',
    refreshTokenPayload)
    .pipe(tap(response => {
      this.localStorage.clear('authenticationToken');
      this.localStorage.clear('expiresAt');

      this.localStorage.store('authenticationToken',
        response.authenticationToken);
      this.localStorage.store('expiresAt', response.expiresAt);
    }));
  }

  constructor(private httpClient:HttpClient,private localStorage:LocalStorageService) { }

  registration(registrationRequestPayload:RegistrationRequestPayload):Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/registration',registrationRequestPayload,{responseType:'text'});
  }
  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login',
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        return true;
      }));
  }
  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }
  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
  getUserName() {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }
}
