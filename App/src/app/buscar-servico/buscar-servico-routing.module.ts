import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarServicoPage } from './buscar-servico.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarServicoPageRoutingModule {}
