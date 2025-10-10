import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddUserDialogComponent>
  ) {
    // Criamos o formulário reativo com suas validações
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(1)]],
      status: [true] // Valor padrão 'true' para o status
    });
  }

  // Função para fechar o dialog sem salvar
  onCancel(): void {
    this.dialogRef.close();
  }

  // Função para salvar
  onSave(): void {
    // Verifica se o formulário é válido
    if (this.userForm.valid) {
      // Fecha o dialog e envia os dados do formulário para quem o abriu
      this.dialogRef.close(this.userForm.value);
    }
  }
}
