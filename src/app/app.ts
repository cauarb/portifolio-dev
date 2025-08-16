import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home-component/home-component";
import { FeaturedprojectComponent } from "./components/featuredproject-component/featuredproject-component";
import { ContactComponent } from "./components/contact-component/contact-component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, HomeComponent, FeaturedprojectComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'meu-portfolio';
}
