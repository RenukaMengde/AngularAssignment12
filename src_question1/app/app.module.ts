import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompSucessDirective } from './comp-sucess.directive';
import { CompFailureDirective } from './comp-failure.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSucessDirective,
    CompFailureDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
