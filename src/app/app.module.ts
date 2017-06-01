import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {Ng2PaginationModule} from 'ng2-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { PoiComponent } from './poi/poi.component';
import { ListPoisComponent } from './list-pois/list-pois.component';
import { PoiService } from './poi.service';


import { HeaderComponent } from './header/header.component';
import { FilterPoiComponent } from './filter-poi/filter-poi.component';
import { SharedModule }      from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { routing } from './app.routing';
import { usersRouting } from './users/users.routing';
import { RegisterService} from './header/register-modal/register.service';
import { LoginService} from './header/login-modal/login.service';
import {LoginModalComponent } from './header/login-modal/login-modal.component';
import { RegisterModalComponent } from './header/register-modal/register-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PoiComponent,
    ListPoisComponent,
    HeaderComponent,
    FilterPoiComponent,
        LoginModalComponent,
    RegisterModalComponent, 
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    usersRouting,
    routing,
  
    SharedModule,
     UsersModule ,
    NgbModule.forRoot(),
    Ng2PaginationModule
  ],

  providers: [PoiService,RegisterService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
