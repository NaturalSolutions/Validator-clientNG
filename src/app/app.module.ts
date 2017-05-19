import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';
import { PoiComponent } from './poi/poi.component';
import { ListPoisComponent } from './list-pois/list-pois.component';
import { PoiService } from './poi.service';


import { HeaderComponent } from './header/header.component';
import { FilterPoiComponent } from './filter-poi/filter-poi.component';
import { SharedModule }      from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
      PoiComponent,
        ListPoisComponent,
       HeaderComponent,
    FilterPoiComponent,
      
  ],
  imports: [
    BrowserModule,
     SharedModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
       Ng2PaginationModule
  ],
  providers: [PoiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
