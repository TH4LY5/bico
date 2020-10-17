import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDoPrestadorPageRoutingModule } from './perfil-do-prestador-routing.module';

import { PerfilDoPrestadorPage } from './perfil-do-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDoPrestadorPageRoutingModule
  ],
  declarations: [PerfilDoPrestadorPage]
})
export class PerfilDoPrestadorPageModule {}
