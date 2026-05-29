import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsGalleryComponent } from './features/projects-gallery/projects-gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'realisations', component: ProjectsGalleryComponent },
  { path: '**', redirectTo: '' },
];
