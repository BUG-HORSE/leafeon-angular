import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LunaComponent } from './luna/luna.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'Luna',
    component: LunaComponent,
    title: 'Luna page'
  },
  {
    path: 'Pokedex',
    component: PokedexComponent,
    title: 'Pokedex page'
  }
];

export default routeConfig;
