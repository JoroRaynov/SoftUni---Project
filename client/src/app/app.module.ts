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
import { RefreshComponent } from './shared/refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RefreshComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
