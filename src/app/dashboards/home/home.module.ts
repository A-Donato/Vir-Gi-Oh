import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GodsIconsComponent } from './gods-icons/gods-icons.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [HomeComponent, GodsIconsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TableModule
  ]
})
export class HomeModule { }
