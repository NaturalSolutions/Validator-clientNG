import { Component, OnInit,Output } from '@angular/core';
import { User } from 'app/users/user/user';
import { RegisterService } from 'app/services/register.service';
import { LoginService } from 'app/services/login.service';
import { PoiService } from 'app/services/poi.service';
import { Poi } from 'app/contributions/poi/poi';
import { UsersService } from 'app/services/users.service';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

export class UserAccountComponent implements OnInit {
  currentUser:User;
  currentToken;
  users: User[];
  pois: Poi[];
  users1: User[];
  userIsLoading = true;
  poisIsLoading = true;
 badges;
   
  constructor(private regiterService: RegisterService,
    private poisService: PoiService,
    private usersService: UsersService,
    private router: Router,
    private logService: LoginService) {
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadPois();
    this.loadUsers();
    this.currentToken=this.getCurrentUser();
    this.loadCurrentUser(this.currentToken.id)
    
  }
  
  private getCurrentUser(){
    let token = JSON.parse(localStorage.getItem('currentUser'));
    if(!token)return null;
    let jwtHelper= new JwtHelper();
    return jwtHelper.decodeToken(token)
  }
  private deleteUser(_id: string) {
    this.regiterService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.regiterService.getAll().subscribe(users => { this.users = users });
  }
    private loadCurrentUser(_id: string) {
    this.regiterService.getById(_id).subscribe(user => this.currentUser = user , null,
      () => {
        this.badges=this.currentUser.badges;
        this.userIsLoading = false;
      });
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
        this.poisIsLoading = false;
      });
  }


}