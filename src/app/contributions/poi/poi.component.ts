import { Component, Input} from '@angular/core';
import {RoundProgressModule, RoundProgressConfig} from 'angular-svg-round-progressbar';
@Component({
  selector: 'poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})

export class PoiComponent {

  constructor(private _config: RoundProgressConfig) {
    _config.setDefaults({
      stroke:5,
     radius:40
    });
  }
    @Input() data;  
    @Input() users;
}