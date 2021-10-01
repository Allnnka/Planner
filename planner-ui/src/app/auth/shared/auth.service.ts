import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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
 
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }
  
  refreshToken() {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token',
    this.refreshTokenPayload)
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
  logout(){
    this.httpClient.post('http://localhost:8080/api/auth/logout', this.refreshTokenPayload,
      { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      }, error => {
        throwError(error);
      })
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
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
