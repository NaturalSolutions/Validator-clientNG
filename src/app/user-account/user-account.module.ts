import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserAccountComponent } from './user-account.component';

@NgModule({
  imports: [
   CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [UserAccountComponent]
})
export class UserAccountModule { }
