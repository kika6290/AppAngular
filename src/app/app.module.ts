import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourcesComponent } from './Components/cources.component';
import { CourcesService } from './Services/cources.servce';


@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourcesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
