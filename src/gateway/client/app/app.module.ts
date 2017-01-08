import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NicknameComponent } from './nickname/nickname.component'

// Shared module
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    NicknameComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }