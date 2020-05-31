import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../app.material.moule';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';

import { EffectsModule, Actions } from '@ngrx/effects';
import { PersonEffect } from '../dashboard/store/person.effects';
import { StoreModule } from '@ngrx/store';

import { PersonReducer } from './store/person.reducer';

@NgModule({
  declarations: [DashboardComponent, DialogBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    DashboardRoutingModule,
    StoreModule.forFeature('persons', PersonReducer),
    EffectsModule.forFeature([PersonEffect]),
  ],
  entryComponents: [
    DialogBoxComponent
  ],
})
export class DashboardModule { }
