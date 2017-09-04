import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination';
import { PoiMapComponent } from './poi-map/poi-map.component';
import { RankingComponent } from './ranking/ranking.component';
import { SharedModule }      from 'app/shared/shared.module';
import { FilterPoiComponent } from './filter-poi/filter-poi.component';
import { ListPoisComponent } from './list-pois/list-pois.component';
import{PoiComponent} from './poi/poi.component'
import {RouterModule} from '@angular/router';
import { FormContribComponent } from './form-contrib/form-contrib.component';
import {RoundProgressModule, RoundProgressConfig} from 'angular-svg-round-progressbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
      NgbModule.forRoot(),
       Ng2PaginationModule,
       RoundProgressModule
  ],
  declarations: [PoiMapComponent,RankingComponent,FilterPoiComponent,ListPoisComponent,PoiComponent, FormContribComponent],

  exports:[ListPoisComponent],
})
export class ContributionsModule  { }
