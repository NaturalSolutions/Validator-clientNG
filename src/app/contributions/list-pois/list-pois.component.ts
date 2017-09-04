import { Component, OnInit } from '@angular/core';
import { PoiService } from 'app/services/poi.service';
import { Poi } from '../poi/poi';
import { User } from 'app/users/user/user';
import { UsersService } from 'app/services/users.service';


@Component({
  selector: 'list-pois',
  templateUrl: './list-pois.component.html',
  styleUrls: ['./list-pois.component.css']
})

export class ListPoisComponent implements OnInit {

  pois: Poi[];
  users: User[];
  isLoading = true;

  constructor(private poisService: PoiService,
    private usersService: UsersService) {
  }

   ngOnInit() {
    this.loadUsers();
    this.loadPois();
  }

  private loadPois(filter?) {
    this.poisService.getPoi(filter).subscribe(res => this.pois = res
      , null,
      () => {
        this.isLoading = false;
      });
  }

  private reloadPosts(filter) {
    this.loadPois(filter);
  }

  private newFilter(event) {
    this.reloadPosts(event);
  }

  private loadUsers() {
    this.usersService.getUsers().subscribe(res => this.users = res);
  }

}