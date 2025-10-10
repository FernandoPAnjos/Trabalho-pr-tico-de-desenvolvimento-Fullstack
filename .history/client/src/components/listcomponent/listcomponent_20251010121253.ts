import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService, User } from '../../app/services/user';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listcomponent',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})

export class Listcomponent{

 todosUsuarios: User[] = [];
  usuariosFiltrados: User[] = [];

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'age', 'status'];

 dataSource = new MatTableDataSource<User>();
  
  selection = new SelectionModel<User>(true, []);

  termoBuscado: string = '';

   @Input() set termoBusca(value: string) {
    this.termoBuscado = value;
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

  filtrarUsuarios(termo: string): void {
    const termoLower = termo.toLowerCase();

    this.usuariosFiltrados = this.todosUsuarios.filter((user: User) =>
      user.name.toLowerCase().includes(termoLower) ||
      user.id.toString().includes(termoLower)
    );
  }

isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

}
