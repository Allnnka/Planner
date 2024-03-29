import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { LoginRequestPayload } from './login-request.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginRequestPayload:LoginRequestPayload;
  constructor(private router:Router, private authService:AuthService) {
    this.loginRequestPayload={
      username:'',
      password:''
    };
   }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  login(){
    this.loginRequestPayload.username= this.loginForm.get('username').value;
    this.loginRequestPayload.password= this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe(()=>{
      this.router.navigateByUrl("/planner");
      console.log('Login Successful');
    });
  }
}
