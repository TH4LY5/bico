import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-servico',
  templateUrl: './buscar-servico.page.html',
  styleUrls: ['./buscar-servico.page.scss'],
})
export class BuscarServicoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarServico(){
    this.router.navigate(['/resultado-de-busca']);
  }

}
