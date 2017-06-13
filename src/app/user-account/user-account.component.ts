import { Component, OnInit } from '@angular/core';
import { User } from 'app/users/user/user';
import { Router } from '@angular/router';
import { RegisterService } from 'app/header/register-modal/register.service';
import { LoginService } from 'app/header/login-modal/login.service';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

export class UserAccountComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private regiterService: RegisterService,
  private router:Router,
    private logService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(_id: string) {
    this.regiterService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.regiterService.getAll().subscribe(users => { this.users = users; });
  }
  
  logout() {
    this.logService.logout();
    this.router.navigate(['contributions']);
  }
}