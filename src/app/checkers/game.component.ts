import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {CheckersStore} from '../state/game-board.store';
import {BoardCellComponent} from './board-cell/board-cell.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MatListModule, MatBadgeModule, MatButtonModule, BoardCellComponent],
})
export class GameComponent {
  readonly #checkersStore = inject(CheckersStore);

  gameGridSignal = this.#checkersStore.gameState?.board?.grid;
  playersTurn =this.#checkersStore.gameState.currentTurn;
}
