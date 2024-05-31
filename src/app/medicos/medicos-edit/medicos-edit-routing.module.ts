import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicosEditPage } from './medicos-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MedicosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicosEditPageRoutingModule {}
