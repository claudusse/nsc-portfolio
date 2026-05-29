import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section-shell contact-section">
      <div>
        <p class="section-kicker">Contact</p>
        <h2>Discutons de votre prochain projet Microsoft 365.</h2>
        <p>Besoin d’une application métier, d’un workflow automatisé ou d’un tableau de bord Power BI ?</p>
      </div>
      <div class="contact-card">
        <a href="mailto:claudendja@gmail.com">claudendja@gmail.com</a>
        <a href="https://www.linkedin.com" target="_blank">LinkedIn : Claude N’Dja</a>
        <a href="https://github.com" target="_blank">GitHub : claudendja@gmail.com</a>
        <a href="tel:+2250749854237">+225 07 49 85 42 37</a>
      </div>
    </section>

    <footer class="footer">© 2026 Claude N’Dja — Portfolio Microsoft 365.</footer>
  `,
})
export class ContactComponent {}
