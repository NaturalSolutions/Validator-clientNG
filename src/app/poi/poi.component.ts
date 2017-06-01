import { Component, Input } from '@angular/core';


@Component({
  selector: 'poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})

export class PoiComponent {
    constructor(){
        //console.log(this.data);
    }
    @Input() data;  
    @Input() users;
}