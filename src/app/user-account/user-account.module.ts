import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAccountComponent } from './user-account.component';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ProfileFromComponent } from './profile-from/profile-from.component';
import {RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    RouterModule,
    Ng2PaginationModule,

  ],
  declarations: [UserAccountComponent, ProfileFromComponent]
})
export class UserAccountModule { }
