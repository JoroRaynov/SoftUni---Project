import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AuthModule } from './auth/auth.module';
import { AdsModule } from './ads/ads.module';
import { AdsRoutingModule } from './ads/ads-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { SpinnerComponent } from './shared/spinner/spinner.component'; 
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PaginatorComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AdsModule,
    AdsRoutingModule,
    AuthModule,
    CommonModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
