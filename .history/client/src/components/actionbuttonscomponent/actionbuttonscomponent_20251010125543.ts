import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Dialogcomponent } from '../dialogcomponent/dialogcomponent';
import { User, UserService } from '../../app/services/user';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-actionbuttonscomponent',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './actionbuttonscomponent.html',
  styleUrl: './actionbuttonscomponent.css'
})
export class Actionbuttonscomponent {

  @Input() selection = new SelectionModel<User>(true, []);

  @Output() userAdded = new EventEmitter<void>();
  @Output() usersDeleted = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private userService: UserService) { }

   ngOnChanges(changes: SimpleChanges) {
    // Este método será chamado sempre que um @Input (como 'selection') for atualizado pelo pai
    if (changes['selection']) {
      console.log('ActionButtonsComponent: A propriedade [selection] foi recebida ou ATUALIZADA!');
      
      // Para forçar a atualização do botão, podemos nos inscrever nas mudanças da seleção
      // Esta é a solução definitiva se a simples passagem de @Input não funcionar
      this.selection.changed.subscribe(() => {
      });
    }
  }

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

   deletarSelecionados(): void {
    const idsParaDeletar = this.selection.selected.map(item => item.id);
    
    if (idsParaDeletar.length === 0) return;

    const confirmacao = confirm(`Tem certeza que deseja excluir ${idsParaDeletar.length} usuário(s) selecionado(s)?`);

    if (confirmacao) {
      const deletePromises = idsParaDeletar.map(id => 
        this.userService.deleteUser(id).toPromise()
      );

      Promise.all(deletePromises)
        .then(() => {
          alert('Usuário(s) excluído(s) com sucesso');
          this.selection.clear(); 
          this.usersDeleted.emit(); 
        })
        .catch(err => {
          console.error("Ocorreu um erro ao deletar usuários", err);
        });
    }
  }

}
