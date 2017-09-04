import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

//app modules
import { ContributionsModule } from './contributions/contributions.module';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { PoiDetailsModule } from './poi-details/poi-details.module';
import { UserAccountModule } from './user-account/user-account.module';
import { HomeModule } from './home/home.module';
//routing
import { userAccountRouting } from './user-account/user-account.routing';
import { usersRouting } from './users/users.routing';
import { routing } from './app.routing';

//services
import { PoiService } from './services/poi.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { UsersService } from './services/users.service';
import { BadgesService } from './services/badges.service';

import { AuthGuard } from 'app/auth-guard.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    HttpModule,
     RouterModule,
    usersRouting,
    userAccountRouting,
    routing,
    HeaderModule,
    SharedModule,
    UsersModule,
    PoiDetailsModule,
    UserAccountModule,
    ContributionsModule,
    HomeModule

  ],

  providers: [PoiService, RegisterService, LoginService,UsersService,BadgesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
