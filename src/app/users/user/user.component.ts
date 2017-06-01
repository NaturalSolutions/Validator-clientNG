import { Component,  Input } from '@angular/core';
import {UsersService } from '../users.service';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  IDBCursorDirection

isLoading=false;
user;
  constructor(private usersService: UsersService) {
  }

	
 @Input() data;  
  @Input() active;  


}

