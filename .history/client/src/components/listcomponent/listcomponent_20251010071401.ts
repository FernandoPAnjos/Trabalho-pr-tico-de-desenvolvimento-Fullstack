import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-listcomponent',
  imports: [MatListModule],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})
export class ListComponent implements {

  // 2. Crie uma propriedade para armazenar a lista de usuários
  users: User[] = [];

  // 3. Injete o serviço no construtor
  constructor(private userService: UserService) { }

  // 4. O método ngOnInit é executado quando o componente é iniciado
  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    // 5. Chame o método do serviço. O .subscribe() "ativa" a chamada HTTP.
    this.userService.getUsers().subscribe(
      // Callback de sucesso
      (dados) => {
        this.users = dados;
        console.log('Usuários carregados com sucesso!', this.users);
      },
      // Callback de erro
      (erro) => {
        console.error('Erro ao carregar usuários:', erro);
      }
    );
  }
}