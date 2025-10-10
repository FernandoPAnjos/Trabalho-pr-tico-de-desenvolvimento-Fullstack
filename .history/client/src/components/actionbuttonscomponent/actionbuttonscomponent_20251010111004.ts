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

  constructor(private userService: UserService, public dialog: MatDialog) {}

  abrirDialogAdicionar(): void {
    const dialogRef = this.dialog.open(Dialogcomponent, {
      width: '650px', 
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        console.log('Dados recebidos do dialog:', resultado);
      }
    });
  }

}
