import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = ""
  password:string = ""
  constructor(private sessionService:SessionService,private router:Router,private trService:ToastrService) { }
  ngOnInit(): void {
  }
login(){
  let user = {
    "email" :this.email,
    "password":this.password 
  }
  this.sessionService.loginApi(user).subscribe(resp=>{
    if(resp.status == 200){

      this.trService.success(resp.msg,"",{timeOut:3000})
      console.log(this.email);
      console.log(this.password);
      
      console.log(resp.data);
      
      if(resp.data.role.roleName == "hr"){
        this.router.navigateByUrl("/home")
        alert(resp.msg)
      }//inner if
      if(resp.data.role.roleName == "user"){
        this.router.navigateByUrl("/home")
        alert(resp.msg)
      }//inner if
      if(resp.data.role.roleName == "admin"){
        this.router.navigateByUrl("/home")
      alert(resp.msg)
      }//inner if
      if(resp.data.role.roleName == "customer "){
        this.router.navigateByUrl("/home")
        alert(resp.msg)
      }//inner if
     
    
      

    }//outer if 
    else{
      console.log(this.email);
      console.log(this.password);
      this.trService.error(resp.msg,"",{timeOut:3000})

      alert(resp.msg)
    }//else

  })
  
  }
}
