import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Dialogcomponent } from '../dialogcomponent/dialogcomponent';
import { UserService } from '../../app/services/user';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-actionbuttonscomponent',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './actionbuttonscomponent.html',
  styleUrl: './actionbuttonscomponent.css'
})
export class Actionbuttonscomponent {

   @Output() userAdded = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private userService: UserService) { }

  abrirDialogAdicionar(): void {
    const dialogRef = this.dialog.open(Dialogcomponent, {
      width: '650px', 
    });

    dialogRef.afterClosed().subscribe(resultado => {
      // 1. O 'resultado' são os dados do formulário (ex: { name: 'joao', ... })
      console.log('O dialog foi fechado. O resultado foi:', resultado);

      // 2. Verificamos se o usuário clicou em "Salvar" (se o resultado não é nulo/undefined)
      if (resultado) {
        // 3. SE SIM, a chamada para o serviço é feita AQUI.
        // É ESTA LINHA QUE GERA A REQUISIÇÃO POST!
        console.log('Enviando dados para o serviço...');
        this.userService.addUser(resultado).subscribe({
          next: (novoUsuario) => {
            console.log('Usuário adicionado com sucesso via serviço!', novoUsuario);
            alert('Usuário adicionado com sucesso!');
            this.userAdded.emit();
          },
          error: (erro) => {
            console.error('Erro ao chamar o serviço addUser:', erro);
            alert('Falha ao adicionar usuário.');
          }
        });
      }
    });
  }

}
