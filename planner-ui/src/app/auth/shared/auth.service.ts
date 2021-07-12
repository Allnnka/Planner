import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegistrationRequestPayload } from '../registration/registration-request.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  registration(registrationRequestPayload:RegistrationRequestPayload):Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/registration',registrationRequestPayload,{responseType:'text'});
  }
}
