import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  status
  // Adicione outros campos que existam na sua tabela 'users'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // URL da sua API backend
  private apiUrl = 'http://localhost:3000/users';

  // Injete o HttpClient no construtor
  constructor(private http: HttpClient) { }

  // Método que busca os usuários e retorna um Observable com um array de User
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}