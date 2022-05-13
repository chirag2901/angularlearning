import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
 

  constructor( private httpClient:HttpClient) { }

  
  signupApi(user:any):Observable<any>{
      console.log("calling api");
      console.log(user.firstName);
      return this.httpClient.post(environment.host+"api/users",user)
      
  }
  getAllUsers():Observable<any>{
    return this.httpClient.get(environment.host+"api/users") 

  }
  loginApi(user:any):Observable<any>{
    return this.httpClient.post(environment.host + "api/authenticate",user)
  }
}
