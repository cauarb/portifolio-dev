import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss'
})
export class ContactComponent {
  nome = '';
  email = '';
  descricao = '';

  constructor(private http: HttpClient) {}

  enviarEmail() {
    const payload = {
      nome: this.nome,
      email: this.email,
      mensagem: this.descricao
    };

    this.http.post('http://localhost:8080/api/email/send', payload, { responseType: 'text' })
      .subscribe({
        next: (res) => alert(res),
        error: (err) => alert('Erro ao enviar: ' + err.message)
      });
  }
}
