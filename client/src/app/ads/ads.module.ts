import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdsRoutingModule } from './ads-routing.module';



@NgModule({
  declarations: [
    AdsListComponent

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
