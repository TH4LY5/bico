import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatNegociacaoPageRoutingModule } from './chat-negociacao-routing.module';

import { ChatNegociacaoPage } from './chat-negociacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatNegociacaoPageRoutingModule
  ],
  declarations: [ChatNegociacaoPage]
})
export class ChatNegociacaoPageModule {}
