import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  signupApi(user:any){
      console.log("calling api");
      
  }
}
