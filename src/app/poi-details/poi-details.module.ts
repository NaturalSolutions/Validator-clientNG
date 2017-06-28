import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';

import { SharedModule }      from 'app/shared/shared.module';
import {PoiDetailsComponent}  from './poi-details.component';
import { DetailsInfoComponent } from './details-info/details-info.component';
import { DetailsGalleryComponent } from './details-gallery/details-gallery.component';
import { CommentsComponent } from './comments/comments.component';
import { HistoryComponent } from './history/history.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
      NgbModule.forRoot(),
        NgxGalleryModule,
  ],
  declarations: [PoiDetailsComponent, DetailsInfoComponent, DetailsGalleryComponent, CommentsComponent, HistoryComponent, DescriptionComponent],
  exports:[PoiDetailsComponent],
  
})
export class PoiDetailsModule { }
