import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];
  isLoading = true;
  currentUser: User;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.loadUsers();

  }

  private loadUsers() {
    this.usersService.getUsers().subscribe(res => this.users = res
      , null,
      () => {
        this.isLoading = false;
      });
  }
  select(user) {
    this.currentUser = user;
    console.log(this.currentUser.address.geo.lat);
  }

}

