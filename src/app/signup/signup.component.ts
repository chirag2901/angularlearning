import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName:string = ""
    email: string = ""
    password: string=""
    // name: string = "Chirag"
    role:string="user"
    firstNameError :string =""
    emailError:string=""
    passwordError:string="" 
  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
  }
  saveuser(){
    let isError = false;
    if(this.firstName.trim().length==0){
        this.firstNameError = "Please Enter FirstName"
        isError=true
    }else{
      this.firstNameError=""
    }
    if(this.email.trim().length==0){
      this.emailError="Please Enter Email"
      isError=true
    }
    else{
      this.emailError=""
    }
    if(this.passwordError.trim().length==0){
      this.passwordError="Please Enter Password"
      isError=true
    }
    else{
      this.passwordError=""
    }
    if(isError){

    }else{
      let user = {
          "FirstName":this.firstName,
          "Email":this.email,
          "Password":this.password
      }
      this.sessionService.signupApi(user)
    }

  }
signup(){
  console.log(this.email);
  console.log(this.password);
  
  
}
}
