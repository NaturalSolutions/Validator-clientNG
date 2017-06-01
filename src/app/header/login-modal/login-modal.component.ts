import { Component,ViewEncapsulation  } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import{LoginService} from './login.service';
import{User} from 'app/users/user/user';
@Component({
  selector: 'log-modal',
  templateUrl: './login-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
user:User;
    constructor(private modalService: NgbModal,
                private loginService:LoginService) { }

  open(content) {
    this.modalService.open(content,{ windowClass: 'custom-modal' });
  }

   login(form) {
       this.user=form.value;
        console.log(this.user);
        this.loginService.login(this.user.email, this.user.password)
            .subscribe(
                data => {
                    console.log(this.user);
                },
                );
   }
}
