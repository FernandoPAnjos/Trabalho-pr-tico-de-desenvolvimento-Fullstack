import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections'; 
import { MatTableDataSource } from '@angular/material/table'; 
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule // <-- Adicione o módulo da checkbox
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  // A primeira coluna agora é a de seleção. A de 'actions' foi removida.
  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'age', 'status'];
  
  // Usamos MatTableDataSource para integrar facilmente com o SelectionModel
  dataSource = new MatTableDataSource<User>();
  
  // A ferramenta que gerencia o que está selecionado. 'true' permite multi-seleção.
  selection = new SelectionModel<User>(true, []);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.carregarTodosUsuarios();
  }

  public carregarTodosUsuarios(): void {
    this.userService.getUsers().subscribe(
      (dados: User[]) => {
        this.dataSource.data = dados;
        this.selection.clear(); // Limpa a seleção ao recarregar os dados
      },
      (erro: any) => {
        console.error('Erro ao carregar todos os usuários:', erro);
      }
    );
  }
  
  /** Verifica se todos os itens visíveis estão selecionados. */
  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  /** Seleciona todas as linhas ou limpa a seleção. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}