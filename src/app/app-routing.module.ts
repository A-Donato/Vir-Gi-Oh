import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenPackComponent } from './open-pack/open-pack.component';


const routes: Routes = [
  { path: 'open', component: OpenPackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
