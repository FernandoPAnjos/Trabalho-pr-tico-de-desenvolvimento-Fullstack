import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-listcomponent',
  imports: [MatListModule],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})

export class Listcomponent implements OnInit {

  // Esta propriedade 'users' será usada pelo seu HTML
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (dados) => {
        this.users = dados;
        console.log('Usuários carregados com sucesso!', this.users);
      },
      (erro) => {
        console.error('Erro ao carregar usuários:', erro);
      }
    );
  }
}
