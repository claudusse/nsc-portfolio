import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects, Project } from '../../core/data/portfolio.data';
import { NavbarComponent } from '../../shared/components/navbar.component';

@Component({
  selector: 'app-projects-gallery',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  template: `
  <app-navbar />
    <main class="gallery-page">
      <section class="gallery-hero section-shell">
        <a class="back-link" routerLink="/">Retour au portfolio</a> &nbsp;
        <p class="section-kicker">Réalisations</p>
        <h1>Galerie des projets Microsoft 365 et solutions métiers.</h1>
        <p>
          Une vue plus large des cas réalisés, avec les outils utilisés, l'impact métier et une présentation
          pensée pour ouvrir la discussion avec un recruteur ou un décideur.
        </p>
      </section>

      <section class="section-shell gallery-grid">
        @for (project of projects; track project.title) {
          <article class="gallery-card" (click)="selectProject(project)" tabindex="0" (keydown.enter)="selectProject(project)">
            <div class="gallery-visual" [style.background]="project.accent">
              @if (project.image) {
                <img [src]="project.image" [alt]="project.title" />
              }
              <!-- <span style="background: #202ef3;">{{ project.category }}</span> -->
              <span class="eyebrow" style="background: #202ef3;">{{ project.category }}</span>
              <strong>{{ project.title }}</strong>
            </div> 
            <div class="gallery-body">
              <p>{{ project.description }}</p>
              <div class="tool-list">
                @for (tool of project.tools; track tool) {
                  <span>{{ tool }}</span>
                }
              </div>
            </div>
          </article>
        }
      </section>

      @if (selectedProject) {
        <div class="project-modal" role="dialog" aria-modal="true" (click)="closeModal()">
          <article class="modal-card" (click)="$event.stopPropagation()">
            <button class="modal-close" type="button" aria-label="Fermer" (click)="closeModal()">x</button>
            <div class="modal-visual">
              @if (currentImage) {
                <img [src]="currentImage" [alt]="selectedProject.title" />
              }
              @if (projectImages.length > 1) {
                <button class="slider-control slider-prev" type="button" aria-label="Image précédente" (click)="previousImage()">‹</button>
                <button class="slider-control slider-next" type="button" aria-label="Image suivante" (click)="nextImage()">›</button>
              }
              <h2>{{ selectedProject.title }}</h2>
            </div>
            <div class="modal-gallery-footer">
              @if (projectImages.length > 1) {
                <div class="slider-thumbs" aria-label="Images du projet">
                  @for (image of projectImages; track image; let index = $index) {
                    <button
                      type="button"
                      [class.active]="index === currentImageIndex"
                      (click)="goToImage(index)"
                      [attr.aria-label]="'Afficher image ' + (index + 1)"
                    >
                      <img [src]="image" [alt]="selectedProject.title + ' - image ' + (index + 1)" />
                    </button>
                  }
                </div>
              }
            </div>
          </article>
        </div>
      }
    </main>
  `,
})
export class ProjectsGalleryComponent {
  projects = projects;
  selectedProject: Project | null = null;
  currentImageIndex = 0;

  get projectImages() {
    if (!this.selectedProject) {
      return [];
    }

    if (this.selectedProject.galleryImages?.length) {
      return this.selectedProject.galleryImages;
    }

    return this.selectedProject.image ? [this.selectedProject.image] : [];
  }

  get currentImage() {
    return this.projectImages[this.currentImageIndex];
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.currentImageIndex = 0;
  }

  closeModal() {
    this.selectedProject = null;
    this.currentImageIndex = 0;
  }

  previousImage() {
    const total = this.projectImages.length;
    this.currentImageIndex = (this.currentImageIndex - 1 + total) % total;
  }

  nextImage() {
    const total = this.projectImages.length;
    this.currentImageIndex = (this.currentImageIndex + 1) % total;
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }
}
