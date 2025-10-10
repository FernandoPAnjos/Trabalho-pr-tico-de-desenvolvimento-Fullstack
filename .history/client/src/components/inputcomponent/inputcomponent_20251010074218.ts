import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inputcomponent',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './inputcomponent.html',
  styleUrl: './inputcomponent.css'
})
export class Inputcomponent {
  termoDaBusca: string = '';

  // 2. @Output para criar um "emissor de eventos"
  // Ele vai emitir um evento chamado 'buscaRealizada' com uma string (o termo da busca)
  @Output() buscaRealizada = new EventEmitter<string>();

  // 3. Método que será chamado pelo clique do botão
  realizarBusca(): void {
    // Emite o evento com o valor atual do input
    this.buscaRealizada.emit(this.termoDaBusca);
  }
}

