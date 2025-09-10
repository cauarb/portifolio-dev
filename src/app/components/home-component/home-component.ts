import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

  irParaProjetos() {
    const projetosSection = document.getElementById('projetos');
    if (projetosSection) {
      projetosSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
