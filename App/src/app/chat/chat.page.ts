import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [
    {
      side : 'right',
      msg : 'Olá'
    },
    {
      side : 'left',
      msg : 'Oie'
    },
    {
      side : 'right',
      msg : 'Queria um orçamento, teria como fazer ?'
    },
    {
      side : 'left',
      msg : 'Claro! Vou enviar uma proposta!'
    },
    {
      side : 'right',
      msg : 'Ok, vou aguarda, obrigado'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
