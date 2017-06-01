import { Component,ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { RegisterService} from './register.service';
import{User} from 'app/users/user/user';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'regModal',
  templateUrl: './register-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {

user :User;
succses=false;
  constructor(private modalService: NgbModal,
  private alertConfig: NgbAlertConfig, 
  private registerService:RegisterService) { 
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  };
  open(content) {
    this.modalService.open(content,{ windowClass: 'custom-modal' });
  }

 change(form) {
  this.user=form.value;
   
  this.registerService.create(this.user)
            .subscribe(
                data => console.log(this.user),
              null,
              () => { this.succses= true; }
                );

    }
}
