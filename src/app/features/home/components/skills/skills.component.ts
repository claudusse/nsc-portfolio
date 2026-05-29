import { Component } from '@angular/core';
import { skillGroups } from '../../../../core/data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section-shell section-block">
      <div class="section-heading">
        <p class="section-kicker">Compétences</p>
        <h2>Une expertise orientée solutions concrètes.</h2>
        <p>Un socle technique complet pour créer, automatiser, connecter et visualiser les données.</p>
      </div>

      <div class="skills-grid">
        @for (group of skillGroups; track group.title) {
          <article class="skill-card">
            <div class="skill-icon">{{ group.icon }}</div>
            <h3>{{ group.title }}</h3>
            <div class="pill-list">
              @for (item of group.items; track item) {
                <span>{{ item }}</span>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skillGroups = skillGroups;
}
