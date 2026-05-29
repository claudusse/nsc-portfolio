import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="projects" class="section-shell section-block">
      <div class="section-heading with-action">
        <div>
          <p class="section-kicker">Réalisations</p>
          <h2>Des projets présentés comme des cas métiers.</h2>
          <p>Chaque réalisation met en avant le contexte, la solution et la valeur apportée</p>
        </div>
        <a class="btn btn-secondary" routerLink="/realisations">Voir plus</a>
      </div>

      <div class="projects-grid">
        @for (project of projects; track project.title) {
          <article class="project-card">
            <div class="project-visual" [style.background]="project.accent">
              @if (project.image) {
                <img [src]="project.image" [alt]="project.title" />
              }
              <span>{{ project.category }}</span>
            </div>
            <div class="project-body">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="impact">{{ project.impact }}</div>
              <div class="tool-list">
                @for (tool of project.tools; track tool) {
                  <span>{{ tool }}</span>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects = projects.slice(0, 3);
}

