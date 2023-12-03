import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/auth-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode:boolean=false;
  loading:boolean=false;
  error:string="";
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  changeToggle()
  {
    this.isLoginMode=!this.isLoginMode;
  }

  handleAuth(form:NgForm)
  {
  
    this.loading=true;
    const email=form.value.email;
    const password=form.value.password;
    let authResponse:Observable<AuthResponse>;

    if(this.isLoginMode)
    {
      authResponse=this.authService.login(email,password);
    }
    else{
      authResponse=this.authService.register(email,password);
    }

    authResponse.subscribe({
          next:(response)=>{
            this.loading=false;
            this.error="";
            console.log(response);
          },

          error:(err)=>{
            this.loading=false;
            this.error=err;
      
            console.log(err);
          }


    
    })
   
  }

}
