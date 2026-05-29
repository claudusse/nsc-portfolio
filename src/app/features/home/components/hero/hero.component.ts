import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero section-shell">
      <div class="hero-content">
        <div class="eyebrow">Microsoft 365 • Power Platform • Business Apps</div>
        <h1>Consultant Microsoft 365 & Développeur de solutions métiers.</h1>
        <p>
          J’aide les organisations à digitaliser leurs processus avec Power Apps, Power Automate,
          Power BI, SharePoint et des applications web modernes.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">Voir mes réalisations</a>
          <a class="btn btn-secondary" href="#contact">Me contacter</a>
        </div>
        <div class="hero-stack">
          <span>Power Apps</span><span>Power Automate</span><span>Power BI</span><span>SharePoint</span>
        </div>
      </div>

      <div class="hero-card">
        <div class="glass-card main-card">
          <div class="card-header">
            <span class="status-dot"></span>
            <span>Portfolio Microsoft 365</span>
          </div>
          <div class="dashboard-grid">
            <div><strong>25+</strong><small>Workflows</small></div>
            <div><strong>10+</strong><small>Dashboards</small></div>
            <div><strong>8+</strong><small>Apps métiers</small></div>
            <div><strong>100%</strong><small>Orienté impact</small></div>
          </div>
          <div class="mock-chart"><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
