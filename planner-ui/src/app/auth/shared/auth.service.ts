import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegistrationRequestPayload } from '../registration/registration-request.payload';
import { LoginRequestPayload } from '../login/login-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private localStorage:LocalStorageService) { }

  registration(registrationRequestPayload:RegistrationRequestPayload):Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/registration',registrationRequestPayload,{responseType:'text'});
  }
  login(loginRequestPayload:LoginRequestPayload) :Observable<any>{
      return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login', loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        return true;
      }));
  }
}
