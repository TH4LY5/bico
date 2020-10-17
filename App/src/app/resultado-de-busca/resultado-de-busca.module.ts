import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoDeBuscaPageRoutingModule } from './resultado-de-busca-routing.module';

import { ResultadoDeBuscaPage } from './resultado-de-busca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoDeBuscaPageRoutingModule
  ],
  declarations: [ResultadoDeBuscaPage]
})
export class ResultadoDeBuscaPageModule {}
