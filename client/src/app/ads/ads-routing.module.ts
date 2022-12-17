import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../shared/guards/auth.activate';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { NewAdComponent } from './new-ad/new-ad.component';

const routes: Routes = [
  {
    path: 'data/catalog',
    canActivate: [AuthActivate],
    component: AdsListComponent,

  },
  {
    path: 'data/catalog/new',
    canActivate: [AuthActivate],
    component: NewAdComponent,
  },
  {
    path: 'details/:id',
    canActivate: [AuthActivate],
    component: AdDetailsComponent,
  },
];

export const AdsRoutingModule = RouterModule.forChild(routes);
