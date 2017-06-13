import { Component, OnInit, Input } from '@angular/core';
import { LoginService} from './login-modal/login.service';
import 'rxjs/add/operator/debounceTime';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private show = false;
  @Input() public alert;

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;
constructor(private connect :LoginService){}

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe((message) => this.successMessage = message);
    this._success.debounceTime(6000).subscribe(() => this.successMessage = null);
    console.log(this.connect.isconnected());
    
  }
  newAlert(event) {
    this.show = true;
    this._success.next(`${new Date()} - Message successfully changed.`)
  }

  closeAlert() {
    this.show = false;

  }

}


