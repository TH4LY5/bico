import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarServicoPageRoutingModule } from './buscar-servico-routing.module';

import { BuscarServicoPage } from './buscar-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarServicoPageRoutingModule
  ],
  declarations: [BuscarServicoPage]
})
export class BuscarServicoPageModule {}
