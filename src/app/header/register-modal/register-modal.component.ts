import { Component, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/users/user/user';
import{FormValidator} from 'app/shared/formValidator.component'

@Component({
  selector: 'regModal',
  templateUrl: './register-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {

  user: User;
  msg_error: string;
  validate = false;
  private modalRef: NgbModalRef;
  registerForm: FormGroup;

  constructor(private modalService: NgbModal,
    private registerService: RegisterService,
    private formBuilder: FormBuilder) {
  };

  open(content) {
    this.modalRef = this.modalService.open(content, { windowClass: 'custom-modal' });
    this.msg_error = null;
     this.registerForm = this.formBuilder.group({
            firstName:['',Validators.required],
            lastName: ['',Validators.required],
            email: ['', FormValidator.email],
            password: ['',FormValidator.password],
        })
  }

  change(registerForm) {
    this.user = registerForm.value;
    this.registerService.create(this.user)
      .subscribe(
      data => console.log(this.user),
      error => {
        this.msg_error = error._body
      },
      () => { this.validate = true; this.modalRef.close();this.alert.emit(this.validate)}
      );
  }

   @Output() alert= new EventEmitter();
   
}
