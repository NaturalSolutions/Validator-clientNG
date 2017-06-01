import { Component, Output,Input,EventEmitter} from '@angular/core';
 import { User} from 'app/users/user/user';
@Component({
  selector: 'filter-poi',
  templateUrl: './filter-poi.component.html',
  styleUrls: ['./filter-poi.component.css']
})
export class FilterPoiComponent{
  typePoi=["Jardins","Parcs"];
  newValue;

@Input() users ;

@Output() filter= new EventEmitter();

change(filterData){
this.newValue=filterData.value;
  this.filter.emit(this.newValue)

     
}
  
}

