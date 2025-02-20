import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicosEditPageRoutingModule } from './medicos-edit-routing.module';

import { MedicosEditPage } from './medicos-edit.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MedicosEditPageRoutingModule
  ],
  declarations: [MedicosEditPage]
})
export class MedicosEditPageModule {}
