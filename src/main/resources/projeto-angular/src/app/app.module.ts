import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { InputLimiterDirective } from './limit-character.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputLimiterDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
