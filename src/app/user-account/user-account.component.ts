import { Component, OnInit,Output } from '@angular/core';
import { User } from 'app/users/user/user';
import { RegisterService } from 'app/services/register.service';
import { LoginService } from 'app/services/login.service';
import { PoiService } from 'app/services/poi.service';
import { Poi } from 'app/contribustions/poi/poi';
import { UsersService } from 'app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

export class UserAccountComponent implements OnInit {
  currentUser: User;
  users: User[];
  pois: Poi[];
  users1: User[];
  isLoading = true;
  


  constructor(private regiterService: RegisterService,
    private poisService: PoiService,
    private usersService: UsersService,
    private router: Router,
    private logService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadPois();
    this.loadUsers();
  }
  private deleteUser(_id: string) {
    this.regiterService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.regiterService.getAll().subscribe(users => { this.users = users; });
  }

 
  private logout() {
    this.logService.logout();
    this.router.navigate(['contributions']);
  }
  private loadUsers() {
    this.usersService.getUsers().subscribe(res => this.users1 = res);
  }
  private loadPois() {
    this.poisService.getPoi({ userId: 1 }).subscribe(res => this.pois = res
      , null,
      () => {
        this.isLoading = false;
      });
  }


}