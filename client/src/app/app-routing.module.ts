import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { RefreshComponent } from './shared/refresh/refresh.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MainComponent
},
{
  path: 'not-found',
  component: NotFoundComponent
},
{
  path: 'refresh',
  component: RefreshComponent
},
{
  path: '**',
  redirectTo: '/not-found'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }