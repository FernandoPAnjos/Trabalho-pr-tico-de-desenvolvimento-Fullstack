import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inputcomponent } from '../components/inputcomponent/inputcomponent';
import { Listcomponent } from '../components/listcomponent/listcomponent';
import { Actionbuttonscomponent } from '../components/actionbuttonscomponent/actionbuttonscomponent';
import { HttpClientModule } from '@angular/common/http';
import { UserService, User } from './services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inputcomponent, Listcomponent, Actionbuttonscomponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  conteudoDaBusca: string = '';

  // O construtor fica vazio, não precisa mais do UserService
  constructor() {}

  // 2. Este método apenas atualiza a propriedade quando o InputComponent emite um evento
  onBuscaRealizada(termo: string) {
    this.termoDeBusca = termo;
  }
}
