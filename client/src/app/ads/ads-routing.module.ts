import { RouterModule, Routes } from '@angular/router';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { NewAdComponent } from './new-ad/new-ad.component';

const routes: Routes = [
  {
    path: 'data/catalog',
    component: AdsListComponent,
  },
  {
    path: 'data/catalog/new',
    component: NewAdComponent,
  },
  {
    path: 'details/:id',
    component: AdDetailsComponent,
  },
];

export const AdsRoutingModule = RouterModule.forChild(routes);
