import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Ng2PaginationModule} from 'ng2-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserComponent } from './user/user.component';
import { SharedModule }      from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    SharedModule,
      NgbModule.forRoot(),
    Ng2PaginationModule
  ],
  declarations: [ListUsersComponent, UserComponent],
  exports:[UserComponent],
})
export class UsersModule { }
