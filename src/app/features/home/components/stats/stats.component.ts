import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="stats section-shell">
      <article><strong>Automatisation</strong><span>Processus manuels transformés en workflows fiables</span></article>
      <article><strong>Reporting</strong><span>Dashboards Power BI pour piloter les décisions</span></article>
      <article><strong>Collaboration</strong><span>Solutions SharePoint, Teams et Microsoft 365</span></article>
    </section>
  `,
})
export class StatsComponent {}
