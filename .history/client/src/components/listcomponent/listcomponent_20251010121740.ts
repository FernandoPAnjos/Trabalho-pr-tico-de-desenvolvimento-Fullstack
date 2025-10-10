import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../app/services/user';
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

  // A ÚNICA fonte de dados para a tabela
  dataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);

  // O @Input agora vai usar o filtro nativo do dataSource
  @Input() set termoBusca(value: string) {
    this.aplicarFiltro(value);
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.carregarTodosUsuarios();

    // (Opcional, mas recomendado) Customiza a lógica de filtro do dataSource
    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const dataStr = (data.id + data.name + data.email).toLowerCase();
      return dataStr.includes(filter);
    };
  }

  public carregarTodosUsuarios(): void {
    this.userService.getUsers().subscribe(
      (dados: User[]) => {
        // CORREÇÃO PRINCIPAL: Coloque os dados da API diretamente no dataSource.
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