import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inputcomponent } from '../components/inputcomponent/inputcomponent';
import { Listcomponent } from '../components/listcomponent/listcomponent';
import { Actionbuttonscomponent } from '../components/actionbuttonscomponent/actionbuttonscomponent';
import { HttpClientModule } from '@angular/common/http';
import { UserService, User } from './services/user';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Dialogcomponent } from '../components/dialogcomponent/dialogcomponent';

@Component({
  selector: 'app-root',
  imports: [Inputcomponent, Listcomponent, Actionbuttonscomponent, HttpClientModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private userService: UserService, public dialog: MatDialog) {}

  abrirDialogAdicionar(): void {
    const dialogRef = this.dialog.open(Dialogcomponent, {
      width: '450px', // Defina uma largura
    });
  }

  dialogRef.afterClosed().subscribe(resultado => {
      // Se o usuário salvou (resultado não é nulo/undefined)
      if (resultado) {
        console.log('Dados recebidos do dialog:', resultado);
      }
    });
  }

  termoDeBusca: string = '';

  onBuscaRealizada(termo: string) {
    this.termoDeBusca = termo;
  }
}

