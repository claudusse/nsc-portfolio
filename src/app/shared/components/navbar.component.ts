import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="navbar">
      <a class="brand" href="#top">
        @if (!photoUnavailable) {
          <img class="brand-photo" src="assets/images/claude.jpeg" alt="Photo de Claude N'DJA" (error)="photoUnavailable = true" />
        } @else {
          <span class="brand-photo brand-fallback">CN</span>
        }
        <span class="brand-copy">
          <strong>Claude N'DJA</strong>
          <small>Consultant Microsoft 365</small>
        </span>
      </a>

      <nav>
        <a href="#about">Profil</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Réalisations</a>
        <a href="#experience">CV</a>
        <a class="nav-cta" href="#contact">Contact</a>
      </nav>
    </header>
  `,
})
export class NavbarComponent {
  photoUnavailable = false;
}
