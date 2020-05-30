import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../app.material.moule';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
