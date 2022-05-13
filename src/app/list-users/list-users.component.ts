import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private sessionService:SessionService) { }
users:Array<any> = []
  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.sessionService.getAllUsers().subscribe(resp=>{
      console.log(resp);
      this.users = resp.data
    })
  }

}
