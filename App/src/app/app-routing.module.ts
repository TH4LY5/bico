import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'buscar-servico',
    loadChildren: () => import('./buscar-servico/buscar-servico.module').then( m => m.BuscarServicoPageModule)
  },
  {
    path: 'resultado-de-busca',
    loadChildren: () => import('./resultado-de-busca/resultado-de-busca.module').then( m => m.ResultadoDeBuscaPageModule)
  },
  {
    path: 'perfil-do-prestador',
    loadChildren: () => import('./perfil-do-prestador/perfil-do-prestador.module').then( m => m.PerfilDoPrestadorPageModule)
  },
  {
    path: 'chat-negociacao',
    loadChildren: () => import('./chat-negociacao/chat-negociacao.module').then( m => m.ChatNegociacaoPageModule)
  },
  {
    path: 'meu-perfil',
    loadChildren: () => import('./meu-perfil/meu-perfil.module').then( m => m.MeuPerfilPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
