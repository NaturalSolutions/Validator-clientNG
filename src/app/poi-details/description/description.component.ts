import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Poi} from 'app/contributions/poi/poi';
import {FormBuilder,FormGroup} from '@angular/forms';
import { LoginService} from 'app/services/login.service';
@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() pois: Poi;
  update=false;
  descForm: FormGroup;
  constructor(private connect :LoginService,
    private fb: FormBuilder) {
  }

  ngOnInit() { this.descForm = this.fb.group({
      desc: [this.pois.desc],
    })
  }

  private change(descForm) {
    this.update=false;
    let newValue = descForm.value;
    this.desc.emit(newValue);
    
  }
  private reset() {
     this.update=false;
  }
 private modifie(){
   this.update=true;
 }

 @Output() desc = new EventEmitter();
}
