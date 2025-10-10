import { Component } from '@angular/core';

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
