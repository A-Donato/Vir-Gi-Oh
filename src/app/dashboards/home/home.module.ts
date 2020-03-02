import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GodsIconsComponent } from './gods-icons/gods-icons.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [HomeComponent, GodsIconsComponent, CardDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ]
})
export class HomeModule { }
