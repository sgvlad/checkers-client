import {Routes} from '@angular/router';
import {GameComponent} from './checkers/game.component';

export const routes: Routes = [
  { path: 'game/:id', component: GameComponent },
  { path: 'game/state', component: GameComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/game/state',
  },
];
