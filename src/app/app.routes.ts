import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';

// rutas del sistema a las que podemos acceder y configurar
export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  }
];
