import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdsListComponent } from './ads-list/ads-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsListComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
