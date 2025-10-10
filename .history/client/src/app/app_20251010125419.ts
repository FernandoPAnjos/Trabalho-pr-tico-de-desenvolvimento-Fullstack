import { Component, signal, ViewChild } from '@angular/core';
import { Inputcomponent } from '../components/inputcomponent/inputcomponent';
import { Listcomponent } from '../components/listcomponent/listcomponent';
import { Actionbuttonscomponent } from '../components/actionbuttonscomponent/actionbuttonscomponent';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [Inputcomponent, Listcomponent, Actionbuttonscomponent, HttpClientModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  termoDeBusca: string = '';

   @ViewChild(Listcomponent) listComponent!: Listcomponent;

   constructor() {}

  onBuscaRealizada(termo: string) {
    this.termoDeBusca = termo;
  }

  onUserAdded(): void {
    this.listComponent.carregarTodosUsuarios();
  }

   onUsersDeleted(): void {
    console.log('AppComponent: Fui notificado que usuários foram deletados. Atualizando a lista...');
    this.listComponent.carregarTodosUsuarios();
  }
  
}

