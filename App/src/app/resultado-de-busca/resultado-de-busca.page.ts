import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-de-busca',
  templateUrl: './resultado-de-busca.page.html',
  styleUrls: ['./resultado-de-busca.page.scss'],
})
export class ResultadoDeBuscaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  abrirPerfil(id){
    this.router.navigate(['/perfil-do-prestador']);
  }

}
