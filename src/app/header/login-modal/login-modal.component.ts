import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { User } from 'app/users/user/user';
import{FormValidator} from 'app/shared/formValidator.component'

@Component({
    selector: 'log-modal',
    templateUrl: './login-modal.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent  {

    user: User;
    msg_error: string;
    loginForm: FormGroup;

    private modalRef: NgbModalRef;
    constructor(private modalService: NgbModal,
        private loginService: LoginService,
        private formBuilder: FormBuilder) {
    }

    open(content) {
        this.modalRef = this.modalService.open(content, { windowClass: 'custom-modal' });
        this.msg_error = null;
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.email],
            password:['',Validators.required],
        })
    }

    private login(loginForm) {
        this.user = loginForm.value;
        this.loginService.login(this.user.email, this.user.password)
            .subscribe(
            data => {
                console.log(this.user);
            },
            error => {
                this.msg_error = error._body
            },
            () => { this.modalRef.close(); }
            );
    }
    
}
