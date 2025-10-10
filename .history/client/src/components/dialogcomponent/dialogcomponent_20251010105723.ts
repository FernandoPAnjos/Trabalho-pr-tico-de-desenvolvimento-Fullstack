import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-dialogcomponent',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDialogModule],
  templateUrl: './dialogcomponent.html',
  styleUrl: './dialogcomponent.css'
})
export class Dialogcomponent {

}
