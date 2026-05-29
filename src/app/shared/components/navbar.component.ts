import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="navbar" [class.menu-open]="mobileMenuOpen">
      <a class="brand" href="#top" (click)="closeMenu()">
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

      <button
        class="menu-toggle"
        type="button"
        aria-label="Ouvrir le menu"
        [attr.aria-expanded]="mobileMenuOpen"
        (click)="toggleMenu()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav [class.open]="mobileMenuOpen">
        <a href="#about" (click)="closeMenu()">Profil</a>
        <a href="#skills" (click)="closeMenu()">Compétences</a>
        <a href="#projects" (click)="closeMenu()">Réalisations</a>
        <a href="#experience" (click)="closeMenu()">CV</a>
        <a class="nav-cta" href="#contact" (click)="closeMenu()">Contact</a>
      </nav>
    </header>
  `,
})
export class NavbarComponent {
  photoUnavailable = false;
  mobileMenuOpen = false;

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }
}
