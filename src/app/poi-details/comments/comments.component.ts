import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { LoginService} from 'app/services/login.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

   @Input() comments ;
   currentComment;
   comForm: FormGroup;
   constructor(private connect :LoginService,
    private fb: FormBuilder) {
  }

  ngOnInit() { this.comForm = this.fb.group({
      body: [''],
    })
  }

  private add(comForm) {
    let newValue = comForm.value;
    this.com.emit(newValue);
    comForm.reset();
    
  }
  private delete(comment){
    this.currentComment=comment;
     this.commentId.emit(this.currentComment.id);
 }

 @Output() com = new EventEmitter();
 @Output() commentId = new EventEmitter();
 @Input() active;
}