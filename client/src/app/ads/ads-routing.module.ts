import { RouterModule, Routes } from "@angular/router";
import { AdsListComponent } from "./ads-list/ads-list.component";

const routes: Routes = [
    {
        path: 'data/catalog',
        component: AdsListComponent
    }
]

export const AdsRoutingModule = RouterModule.forChild(routes)