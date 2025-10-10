import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService, User } from '../../app/services/user';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listcomponent',
  imports: [MatTableModule],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css'
})

export class Listcomponent implements OnInit {

  @Input() users: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'email', 'idade', 'criado em'];

  constructor() { }
}
