import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section-shell split-section">
      <div>
        <p class="section-kicker">Profil</p>
        <h2>Un profil hybride entre développement, automatisation et transformation digitale.</h2>
      </div>
      <div class="profile-panel">
        <div class="profile-photo-card">
          @if (!photoUnavailable) {
            <img src="assets/images/profil-2.jpeg" alt="Photo de profil de Claude N'DJA"/>
          } @else {
            <span>CN</span>
          }
        </div>
        <div class="text-card">
          <p>
            Je conçois des solutions simples, utiles et professionnelles pour aider les équipes à mieux travailler :
            applications Power Apps, automatisations Power Automate, tableaux de bord Power BI, espaces SharePoint
            et plateformes métiers sur mesure.
          </p>
          <p>
            Mon objectif : comprendre le besoin métier, simplifier le processus et livrer une solution claire,
            maintenable et orientée résultat.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  photoUnavailable = false;
}
