import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicosListPageRoutingModule } from './medicos-list-routing.module';

import { MedicosListPage } from './medicos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicosListPageRoutingModule
  ],
  declarations: [MedicosListPage]
})
export class MedicosListPageModule {}
