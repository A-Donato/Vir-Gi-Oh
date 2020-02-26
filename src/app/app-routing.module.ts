import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenPackComponent } from './open-pack/open-pack.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./dashboards/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dashboards/home/home.module').then(m => m.HomeModule)
  },
  { path: 'open', component: OpenPackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
