import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  n1:string = ""
  n2:string=""
  opr:string =""
  ans:string=""
  constructor() { }

  ngOnInit(): void {
  }
  calculate(){
    if(this.opr == "add"){
      this.ans = parseInt(this.n1) + parseInt(this.n2)  +""
    }
    else if(this.opr == "mul"){
      this.ans = parseInt(this.n1) * parseInt(this.n2)  +""
    }
    else if(this.opr == "div"){
      this.ans = parseInt(this.n1) / parseInt(this.n2)  +""
    }
    else if(this.opr == "sub"){
      this.ans = parseInt(this.n1) - parseInt(this.n2)  +""
    }
  }
}
