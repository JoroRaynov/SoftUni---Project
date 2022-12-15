import { RouterModule, Routes } from "@angular/router";
import { AdsListComponent } from "./ads-list/ads-list.component";
import { NewAdComponent } from "./new-ad/new-ad.component";

const routes: Routes = [
    {
        path: 'data/catalog',
        component: AdsListComponent
    },
    {
        path: 'data/catalog/new',
        component: NewAdComponent
    }
]

export const AdsRoutingModule = RouterModule.forChild(routes)