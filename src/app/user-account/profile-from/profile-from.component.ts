import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'app/services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/users/user/user';
import{FormValidator} from 'app/shared/formValidator.component'
@Component({
  selector: 'app-profile-from',
  templateUrl: './profile-from.component.html',
  styleUrls: ['./profile-from.component.css']
})
export class ProfileFromComponent implements OnInit {

  users: User;
  msg_error: string;
  validate = false;
  profilForm: FormGroup;

    constructor(private regiterService: RegisterService,
    private formBuilder: FormBuilder) {
  };

 ngOnInit() {
   
    this.msg_error = null;
     this.profilForm = this.formBuilder.group({
            firstName:[''],
            lastName: [''],
            email: ['', FormValidator.email],
            password: ['',FormValidator.password],
        })
  }

  change(profilForm) {
   
  }
private updateUser(user) {
    this.regiterService.update(user).subscribe(() => { this.loadAllUsers() });
  }
   private loadAllUsers() {
    this.regiterService.getAll().subscribe(users => { this.users = users; });
  }
  

  

}
