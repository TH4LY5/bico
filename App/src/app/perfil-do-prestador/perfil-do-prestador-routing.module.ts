import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDoPrestadorPage } from './perfil-do-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDoPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDoPrestadorPageRoutingModule {}
