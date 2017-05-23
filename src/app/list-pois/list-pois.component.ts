import { Component, OnInit } from '@angular/core';
import { PoiComponent } from 'app/poi/poi.component';
import { PoiService } from 'app/poi.service';
import { Poi } from 'app/poi/poi';

@Component({
  selector: 'list-pois',
  templateUrl: './list-pois.component.html',
  styleUrls: ['./list-pois.component.css']
})

export class ListPoisComponent implements OnInit {
  pois: Poi[];
  isLoading = true;
  
  constructor(private poisService: PoiService) {
  }

  ngOnInit() {
    this.loadPois();
  }

  private loadPois(filter?) {
    this.poisService.getPoi(filter).subscribe(res => this.pois = res
      , null,
      () => { this.isLoading = false; });
  }

  reloadPosts(filter) {
     this.loadPois(filter);
  }

  newFilter(event) {
    this.reloadPosts(event);
  }
}

