import { Component, Input } from '@angular/core';
import { UsersService } from 'app/services/users.service';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  isLoading = false;

  @Input() userData;
  @Input() active;


}

