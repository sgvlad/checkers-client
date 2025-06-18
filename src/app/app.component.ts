import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CheckersStore} from './state/game-board.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, MatToolbar, MatButton],
  providers: [ CheckersStore],
  standalone: true,
})
export class AppComponent {}
