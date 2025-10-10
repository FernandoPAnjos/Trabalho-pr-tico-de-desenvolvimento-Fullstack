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

deletarUsuario(user: User): void {
    const confirmacao = confirm(`Tem certeza que deseja excluir o usuário "${user.name}"?`);
    
    if (confirmacao) {
      // 3. Chama o método deleteUser do nosso serviço, passando o ID do usuário
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          alert('Usuário excluído com sucesso!');
          
          // 4. ATUALIZA A INTERFACE INSTANTANEAMENTE (a melhor parte!)
          // Em vez de recarregar todos os dados do banco, apenas removemos o usuário
          // das nossas listas locais, o que é muito mais rápido.
          this.todosUsuarios = this.todosUsuarios.filter(u => u.id !== user.id);
          this.usuariosFiltrados = this.usuariosFiltrados.filter(u => u.id !== user.id);
        },
        error: (erro: any) => {
          console.error('Erro ao excluir usuário:', erro);
          alert('Falha ao excluir usuário.');
        }
      });
    }
  }

}
