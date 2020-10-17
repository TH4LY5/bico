import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatNegociacaoPage } from './chat-negociacao.page';

const routes: Routes = [
  {
    path: '',
    component: ChatNegociacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatNegociacaoPageRoutingModule {}
