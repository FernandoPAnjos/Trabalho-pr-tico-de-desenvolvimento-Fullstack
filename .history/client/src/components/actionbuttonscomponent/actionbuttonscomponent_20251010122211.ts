import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Dialogcomponent } from '../dialogcomponent/dialogcomponent';
import { User, UserService } from '../../app/services/user';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-actionbuttonscomponent',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './actionbuttonscomponent.html',
  styleUrl: './actionbuttonscomponent.css'
})
export class Actionbuttonscomponent {
@Input() selection = new SelectionModel<User>(true, []);

   @Output() userAdded = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private userService: UserService) { }

  abrirDialogAdicionar(): void {
    const dialogRef = this.dialog.open(Dialogcomponent, {
      width: '650px', 
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.userService.addUser(resultado).subscribe({
          next: (novoUsuario) => {
            alert(`O usuário ${novoUsuario.name} foi adicionado com sucesso.`);
            this.userAdded.emit();
          },
          error: (erro) => {
            alert('Falha ao adicionar usuário.');
          }
        });
      }
    });
  }

}
