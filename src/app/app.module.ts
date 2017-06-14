import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import {Ng2PaginationModule} from 'ng2-pagination';
import {NgbModule, NgbTabset} from '@ng-bootstrap/ng-bootstrap';


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
import { UserAccountModule } from './user-account/user-account.module';
import { userAccountRouting } from './user-account/user-account.routing';
import {AuthGuard} from 'app/auth-guard.service';
import { PoiMapComponent } from './poi-map/poi-map.component';



@NgModule({
  declarations: [
    AppComponent,
    PoiComponent,
    ListPoisComponent,
    HeaderComponent,
    FilterPoiComponent,
    LoginModalComponent,
    RegisterModalComponent,
    PoiMapComponent,
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    usersRouting,
    userAccountRouting,
    routing,
  
    SharedModule,
     UsersModule,
     UserAccountModule,
    NgbModule.forRoot(),
    Ng2PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCp_NmNI8YGML7VhLo7xQSvZgBLRjEUVOI'
       })
  ],

  providers: [PoiService,RegisterService,LoginService,AuthGuard,NgbTabset],
  bootstrap: [AppComponent]
})
export class AppModule { }
