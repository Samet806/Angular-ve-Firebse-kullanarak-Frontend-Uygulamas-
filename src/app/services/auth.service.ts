import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';


@Injectable({
  providedIn:"root"
})
export class AuthService {
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  api_key= "AIzaSyABoExawm__GjckRxD7JLts8FjW4agd2_Y";

  
  constructor(private http:HttpClient) { }

  register(email:string, password:string):Observable<any>
{ 
  return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.api_key,
   
    {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap(response=>{
        //Observable,subject => rxjs
        const expirationDate=new Date(new Date().getTime()+(+response.expiresIn *1000));
        const user=new User(response.email,response.localId,response.idToken,expirationDate);
        console.log(user);
      }),
      catchError(this.handleError)
    )
}

login(email:string,password:string)
{
  return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.api_key,
  {
    email:email,
    password:password,
    returnSecureToken:true
  }).pipe(
    tap(response=>{
      //Observable,subject => rxjs
      const expirationDate=new Date(new Date().getTime()+(+response.expiresIn *1000));
      const user=new User(response.email,response.localId,response.idToken,expirationDate);
      console.log(user);
    }),
   
    catchError(this.handleError)
  )
}

private handleError(err:HttpErrorResponse)
{
  let message="hat oluştu";
  if(err.error.error)
  {
    switch(err.error.error.message)
    {
      case "EMAIL_EXISTS":
        message="Bu mail adresi zaten kullanılıyor"
        break;
      case "TOO_MANY_ATTEMPTS_TRY_LATER":
        message="Bir süre bekleyip tekrar deneyiniz"
        break;
      case "EMAIL_NOT_FOUND":
        message="Mail adresi bulunamade"
        break;
      case "INVALID_PASSWORD":
        message="Geçersiz parola girdiniz"
        break;
    
    }
  }
  return throwError(()=>message);
}

}
