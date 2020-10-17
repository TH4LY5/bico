import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-do-prestador',
  templateUrl: './perfil-do-prestador.page.html',
  styleUrls: ['./perfil-do-prestador.page.scss'],
})
export class PerfilDoPrestadorPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  contratar(){
    this.router.navigate(['/chat']);
  }

}
