import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user/user.component';
import {UsersService } from '../users.service';
// import { Poi } from '../user/user';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {



  users: any[];
  isLoading = true;
  
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.usersService.getUsers().subscribe(res => this.users = res
      , null,
      () => { this.isLoading = false; });
  }

  
}

