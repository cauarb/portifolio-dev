import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss'
})
export class ContactComponent {
nome = '';
  email = '';
  mensagem = '';

  enviarFormulario() {
    if (!this.nome || !this.email || !this.mensagem) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const templateParams = {
      from_name: this.nome,
      from_email: this.email,
      message: this.mensagem
    };

    emailjs.send(
      'service_c6zzpfc', 
      'template_11g7jpf',
      templateParams,
      '_id8Q8_pmp_bLD62O'  
    )
    .then((result: EmailJSResponseStatus) => {
      alert('Mensagem enviada com sucesso!');
      this.nome = '';
      this.email = '';
      this.mensagem = '';
    }, (error) => {
      console.error(error.text);
      alert('Ocorreu um erro ao enviar a mensagem.');
    });
  }
}
