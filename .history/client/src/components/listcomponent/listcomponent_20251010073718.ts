import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService, User } from '../../app/services/user';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listcomponent',
  imports: [MatTableModule],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})

export class Listcomponent implements OnInit {

  // Esta propriedade 'users' será usada pelo seu HTML
  users: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'email'];

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
