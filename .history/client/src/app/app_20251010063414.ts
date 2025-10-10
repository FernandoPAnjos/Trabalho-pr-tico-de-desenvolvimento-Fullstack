import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from '../components/inputcomponent/inputcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
