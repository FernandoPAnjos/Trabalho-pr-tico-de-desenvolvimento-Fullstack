import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService, User } from '../../app/services/user';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listcomponent',
  imports: [MatTableModule],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})

export class Listcomponent{

 todosUsuarios: User[] = [];
  usuariosFiltrados: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'email', 'idade'];

   @Input() set termoBusca(value: string) {
    this.filtrarUsuarios(value);
  }

  constructor(private userService: UserService) { }
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

  // 6. A lógica de filtro, que agora acontece no frontend
  filtrarUsuarios(termo: string): void {
    const termoLower = termo.toLowerCase();

    // Filtra a lista original (todosUsuarios) e atualiza a lista de exibição (usuariosFiltrados)
    this.usuariosFiltrados = this.todosUsuarios.filter((user: User) =>
      user.name.toLowerCase().includes(termoLower) ||
      user.email.toLowerCase().includes(termoLower) ||
      user.id.toString().includes(termoLower)
    );
  }
}
