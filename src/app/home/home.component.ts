import { Component, OnInit } from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import { ListPoisComponent } from 'app/contributions/list-pois/list-pois.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor( protected router :Router) { }

  ngOnInit() {  
 
  }

 private click() {
  this.router.navigate(['contributions']);
}
}



