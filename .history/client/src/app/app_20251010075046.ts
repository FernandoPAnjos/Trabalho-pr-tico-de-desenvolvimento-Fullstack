import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inputcomponent } from '../components/inputcomponent/inputcomponent';
import { Listcomponent } from '../components/listcomponent/listcomponent';
import { Actionbuttonscomponent } from '../components/actionbuttonscomponent/actionbuttonscomponent';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inputcomponent, Listcomponent, Actionbuttonscomponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 1. Propriedade para guardar a lista de usuários que será passada para o ListComponent
  listaDeUsuarios: User[] = [];
  
  // 2. Variável para controlar se uma busca já foi feita
  buscaFoiFeita: boolean = false;

  // 3. Injete o UserService aqui, pois é o pai quem vai pedir os dados
  constructor(private userService: UserService) {}

  // 4. Método que será chamado quando o InputComponent emitir o evento 'buscaRealizada'
  onBuscaRealizada(termo: string) {
    this.buscaFoiFeita = true; // Marca que a busca aconteceu
    
    // Por enquanto, vamos buscar todos os usuários. Depois melhoramos isso.
    this.userService.getUsers().subscribe(
      (dados) => {
        // Filtra os dados localmente (solução simples)
        if (!termo) {
          this.listaDeUsuarios = dados; // Se o termo for vazio, retorna tudo
        } else {
          const termoLower = termo.toLowerCase();
          this.listaDeUsuarios = dados.filter(user => 
            user.name.toLowerCase().includes(termoLower) || 
            user.email.toLowerCase().includes(termoLower)
          );
        }
      },
      (erro) => {
        console.error('Erro ao buscar usuários no componente pai:', erro);
        this.listaDeUsuarios = []; // Limpa a lista em caso de erro
      }
    );
  }
}
