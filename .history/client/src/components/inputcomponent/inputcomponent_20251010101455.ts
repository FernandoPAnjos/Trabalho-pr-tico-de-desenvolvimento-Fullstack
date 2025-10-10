import { Component, EventEmitter, Output } from '@angular/core';
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
  value = 'Clear me';

  conteudoDaBusca: string = '';

  @Output() buscaRealizada = new EventEmitter<string>();

  realizarBusca(): void {
    this.buscaRealizada.emit(this.conteudoDaBusca);
  }
}

