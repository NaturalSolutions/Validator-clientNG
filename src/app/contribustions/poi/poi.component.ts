import { Component, Input} from '@angular/core';


@Component({
  selector: 'poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})

export class PoiComponent {
  
 

    @Input() data;  
    @Input() users;
}