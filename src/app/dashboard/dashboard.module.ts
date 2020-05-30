import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../app.material.moule';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, DialogBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    DashboardRoutingModule
  ],
  entryComponents: [
    DialogBoxComponent
  ],
})
export class DashboardModule { }
