import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoDeBuscaPage } from './resultado-de-busca.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoDeBuscaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoDeBuscaPageRoutingModule {}
