import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'filter-poi',
  templateUrl: './filter-poi.component.html',
  styleUrls: ['./filter-poi.component.css']
})
export class FilterPoiComponent{
  typePoi=["Jardins","Parcs"];
      newValue


@Output() filter= new EventEmitter();

change(filterData){
this.newValue=filterData.value;
  this.filter.emit(this.newValue)
   
}
  
}

