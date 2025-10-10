import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inputcomponent } from '../components/inputcomponent/inputcomponent';
import { Listcomponent } from '../components/listcomponent/listcomponent';
import { Actionbuttonscomponent } from '../components/actionbuttonscomponent/actionbuttonscomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inputcomponent, Listcomponent, Actionbuttonscomponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
