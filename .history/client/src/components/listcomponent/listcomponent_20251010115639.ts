import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService, User } from '../../app/services/user';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-listcomponent',
  imports: [MatTableModule, MatCheckboxModule, MatIcon ],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})

export class Listcomponent{

 todosUsuarios: User[] = [];
  usuariosFiltrados: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'email', 'age', 'status', ];

  termoBuscado: string = '';

   @Input() set termoBusca(value: string) {
    this.termoBuscado = value;
    this.filtrarUsuarios(value);
  }

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarTodosUsuarios();
  }

  carregarTodosUsuarios(): void {
    this.userService.getUsers().subscribe(
      (dados: User[]) => {
        this.todosUsuarios = dados;
        this.usuariosFiltrados = dados;
      },
      (erro: any) => {
        console.error('Erro ao carregar todos os usuários:', erro);
      }
    );
  }

  filtrarUsuarios(termo: string): void {
    const termoLower = termo.toLowerCase();

    this.usuariosFiltrados = this.todosUsuarios.filter((user: User) =>
      user.name.toLowerCase().includes(termoLower) ||
      user.id.toString().includes(termoLower)
    );
  }

deletarUsuario(user: User): void {
    const confirmacao = confirm(`Tem certeza que deseja excluir o usuário "${user.name}"?`);

    if (confirmacao) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          alert('O usuário foi excluído com sucesso');

          this.todosUsuarios = this.todosUsuarios.filter(u => u.id !== user.id);
          this.usuariosFiltrados = this.usuariosFiltrados.filter(u => u.id !== user.id);
        },
        error: (erro: any) => {
          alert('Falha ao excluir usuário.');
        }
      });
    }
  }

}
