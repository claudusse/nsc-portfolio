import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, StatsComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  template: `
    <app-navbar />
    <main id="top">
      <app-hero />
      <app-stats />
      <app-about />
      <app-skills />
      <app-projects />
      <app-experience />
      <app-contact />
    </main>
  `,
})
export class HomeComponent {}
