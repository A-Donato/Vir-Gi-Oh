import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { AdvancedSearchComponent } from './advanced-search.component';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { VirgiCardDetailsComponent } from './virgi-card-details/virgi-card-details.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [AdvancedSearchComponent, VirgiCardDetailsComponent],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TableModule,
    SidebarModule,
    ProgressSpinnerModule
  ]
})
export class AdvancedSearchModule { }
