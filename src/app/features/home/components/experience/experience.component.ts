import { Component } from '@angular/core';
import { experiences } from '../../../../core/data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="section-shell split-section">
      <div>
        <p class="section-kicker">CV</p>
        <h2>Parcours professionnel.</h2>
        <p class="muted">Une présentation moderne de ton CV, pensée pour les recruteurs et les décideurs.</p>
        <a class="btn btn-primary small-btn" href="assets/cv-claude-ndja.pdf" target="_blank">Télécharger mon CV</a>
      </div>

      <div class="timeline">
        @for (item of experiences; track item.title) {
          <article class="timeline-item">
            <span>{{ item.year }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences = experiences;
}
