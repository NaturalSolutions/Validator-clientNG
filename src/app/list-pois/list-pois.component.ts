import { Component, OnInit } from '@angular/core';
import { PoiComponent } from 'app/poi/poi.component';
import { PoiService } from 'app/poi.service';
import { Poi } from 'app/poi/poi';
import { User } from 'app/users/user/user';
import { UsersService } from 'app/users/users.service';
import 'leaflet';


@Component({
  selector: 'list-pois',
  templateUrl: './list-pois.component.html',
  styleUrls: ['./list-pois.component.css']
})

export class ListPoisComponent implements OnInit {
  pois: Poi[];
  users: User[];
  isLoading = true;
  

  lat: number = 43.300000;
  lng: number = 5.400000;
  
  constructor(private poisService: PoiService,
    private usersService: UsersService) {
  }

  ngOnInit() {
    this.loadUsers();
    this.loadPois();
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  }

  private loadPois(filter?) {
    this.poisService.getPoi(filter).subscribe(res => this.pois = res
      , null,
      () => {
      this.isLoading = false;  
      });
  }

  reloadPosts(filter) {
    this.loadPois(filter);
  }

  newFilter(event) {
    this.reloadPosts(event);
  }

  private loadUsers() {
    this.usersService.getUsers().subscribe(res => this.users = res);
  }

}