import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdsRoutingModule } from './ads-routing.module';
import { NewAdComponent } from './new-ad/new-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';



@NgModule({
  declarations: [
    AdsListComponent,
    NewAdComponent,
    AdDetailsComponent

  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ],
  exports: [
    AdsListComponent
  ]
})
export class AdsModule { }
