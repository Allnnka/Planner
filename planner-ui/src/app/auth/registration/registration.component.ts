import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { RegistrationRequestPayload } from './registration-request.payload';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerRequestPayload:RegistrationRequestPayload;
  registrationForm:FormGroup;
  constructor(private authService:AuthService) { 
    this.registerRequestPayload={
      username:'',
      email:'',
      password:''
    }
  }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      username:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
  }
  registration(){
    this.registerRequestPayload.username=this.registrationForm.get('username').value;
    this.registerRequestPayload.email=this.registrationForm.get('email').value;
    this.registerRequestPayload.password=this.registrationForm.get('password').value;

    this.authService.registration(this.registerRequestPayload).subscribe(data=>{
      console.log(data);
    });
  }
}
