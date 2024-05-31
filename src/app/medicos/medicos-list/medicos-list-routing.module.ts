import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicosListPage } from './medicos-list.page';

const routes: Routes = [
  {
    path: '',
    component: MedicosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicosListPageRoutingModule {}
