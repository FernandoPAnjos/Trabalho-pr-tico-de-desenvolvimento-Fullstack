import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService, User } from '../../app/services/user';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listcomponent',
  imports: [MatTableModule, MatIcon],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})

export class Listcomponent{

 todosUsuarios: User[] = [];
  usuariosFiltrados: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'email', 'idade', 'ações'];

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
}
