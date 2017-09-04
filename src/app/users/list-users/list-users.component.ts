import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { User } from '../user/user';
import { PoiService } from 'app/services/poi.service';
import { Poi } from 'app/contributions/poi/poi';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];
  isLoading = true;
  currentUser: User;
 pois: Poi[];
  constructor(private usersService: UsersService,
   private poisService: PoiService) {
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
      this.loadPois();
  }
    private loadPois() {
    this.poisService.getPoi({ userId: this.currentUser.id }).subscribe(res => this.pois = res
      , null,
      () => {
        this.isLoading = false;
      });
  }

}

