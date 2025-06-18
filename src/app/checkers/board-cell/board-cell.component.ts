import {Component, inject, input} from '@angular/core';
import {NgClass} from '@angular/common';
import {CheckersBoard, Color, GameState, Piece} from '../../interfaces/checkers.interface';
import {CheckersStore} from '../../state/game-board.store';

@Component({
  selector: 'app-board-cell',
  imports: [
    NgClass
  ],
  templateUrl: './board-cell.component.html',
  styleUrl: './board-cell.component.scss'
})
export class BoardCellComponent {

  piece = input<Piece | null>();
  row = input<number>(0);
  col = input<number>(0);

  readonly #checkersStore = inject(CheckersStore);
  readonly game = this.#checkersStore.gameState;
  selectedPiecePosition = this.#checkersStore.selectedPiecePosition;

  isDark = () => (this.row() + this.col()) % 2 !== 0;

  isSelected = () => {
    const sel = this.selectedPiecePosition();
    return sel?.[0] === this.row() && sel?.[1] === this.col();
  };


  handleClick() {
    const board = this.game?.board();
    const currentTurn = this.game?.currentTurn();
    if (!board.grid || !currentTurn) return;

    const selected = this.selectedPiecePosition();
    const row = this.row();
    const col = this.col();
    const clickedCell = board.grid[row][col];

    // Select piece
    if (clickedCell && clickedCell.color === currentTurn) {
      this.#checkersStore.setSelectedPiece([row, col]);
      return;
    }

    // Attempt move
    if (selected && !clickedCell) {
      const [fromRow, fromCol] = selected;
      const movingPiece = board.grid[fromRow][fromCol];

      // Simple move validation: allow move only to diagonally adjacent cells
      const rowDiff = Math.abs(row - fromRow);
      const colDiff = Math.abs(col - fromCol);

      const isValidSimpleMove =
        rowDiff === 1 && colDiff === 1;

      if (isValidSimpleMove) {
        const newGrid = board.grid.map(piece => piece.slice()); // clone
        newGrid[row][col] = movingPiece;
        newGrid[fromRow][fromCol] = null;

        const gameState = {
          board: {grid: newGrid} as CheckersBoard,
          currentTurn: currentTurn === Color.WHITE  ? Color.BLACK : Color.WHITE
        } as GameState;

        this.#checkersStore.updateGameState(gameState)
        this.#checkersStore.setSelectedPiece(null);
      }
    }
  }

  protected readonly Color = Color;
}
