import { Component, Input, OnInit } from '@angular/core';
import { PoiService } from 'app/poi.service';
import { Poi } from 'app/poi/poi';
import { ActivatedRoute ,Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-poi-details',
  templateUrl: './poi-details.component.html',
  styleUrls: ['./poi-details.component.css']
})

export class PoiDetailsComponent implements OnInit {
  pois: Poi;
  id: number;
  name :string;
  typePoi = ["Jardins", "Parcs"];

  constructor(private poisService: PoiService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.loadPois(this.id);

  }
  private loadPois(id) {
    this.poisService.getPoiId(id).subscribe(
      res => this.pois = res,
      error => { this.router.navigate(['not-found'])},
      () => {});
  }
  @Input() users;
}
