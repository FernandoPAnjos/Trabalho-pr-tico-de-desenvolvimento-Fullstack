import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../app/services/user';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-listcomponent',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})
export class Listcomponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'age', 'status'];

  dataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);

  @Input() set termoBusca(value: string) {
    this.aplicarFiltro(value);
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.carregarTodosUsuarios();

    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const dataStr = (data.id + data.name + data.email).toLowerCase();
      return dataStr.includes(filter);
    };
  }

  public carregarTodosUsuarios(): void {
    this.userService.getUsers().subscribe(
      (dados: User[]) => {
        this.dataSource.data = dados;
      },
      (erro: any) => {
        console.error('Erro ao carregar todos os usuários:', erro);
      }
    );
  }
  
  // Este método agora usa o filtro interno do MatTableDataSource
  aplicarFiltro(valorFiltro: string) {
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }

  /** Verifica se todos os itens atualmente visíveis (filtrados) estão selecionados. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  /** Seleciona todos os itens atualmente visíveis (filtrados) ou limpa a seleção. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }
}