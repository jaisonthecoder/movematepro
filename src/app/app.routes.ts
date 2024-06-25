import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'home',
        loadComponent:() => import('./components/landing-page/landing-page.component').then(m => m.LandingPageComponent)
      }

    ]
}
];

