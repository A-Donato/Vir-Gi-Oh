import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenPackComponent } from './open-pack/open-pack.component';
import { LoadingScreenComponent } from './dashboards/loading-screen/loading-screen.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoadingScreenComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./dashboards/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dashboards/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'open', component: OpenPackComponent
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./dashboards/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
