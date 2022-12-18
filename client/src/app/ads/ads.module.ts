import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdsRoutingModule } from './ads-routing.module';
import { NewAdComponent } from './new-ad/new-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { DeleteAdComponent } from './delete-ad/delete-ad.component';



@NgModule({
  declarations: [
    AdsListComponent,
    NewAdComponent,
    AdDetailsComponent,
    EditAdComponent,
    DeleteAdComponent

  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AdsListComponent
  ]
})
export class AdsModule { }
