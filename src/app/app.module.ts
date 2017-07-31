import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//app modules
import { ContributionsModule } from './contribustions/contributions.module';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { PoiDetailsModule } from './poi-details/poi-details.module';
import { UserAccountModule } from './user-account/user-account.module';
//routing
import { userAccountRouting } from './user-account/user-account.routing';
import { routing } from './app.routing';
import { usersRouting } from './users/users.routing';
//services
import { PoiService } from './services/poi.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { UsersService } from './services/users.service';


import { AuthGuard } from 'app/auth-guard.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],

  imports: [
    BrowserModule,
    HttpModule,
    usersRouting,
    userAccountRouting,
    routing,
    HeaderModule,
    SharedModule,
    UsersModule,
    PoiDetailsModule,
    UserAccountModule,
    ContributionsModule ,

  ],

  providers: [PoiService, RegisterService, LoginService,UsersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
