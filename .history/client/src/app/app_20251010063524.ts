import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent, Inputcomponent } from '../components/inputcomponent/inputcomponent';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent, Inputcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
