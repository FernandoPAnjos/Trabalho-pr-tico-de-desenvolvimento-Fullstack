import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-inputcomponent',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './inputcomponent.html',
  styleUrl: './inputcomponent.css'
})
export class Inputcomponent {

}
