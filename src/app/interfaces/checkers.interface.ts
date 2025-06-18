
export enum Color {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export interface Piece {
  color: Color;
  king: boolean;
}

export interface CheckersBoard {
  grid: (Piece | null)[][];
}

export interface GameState {
  board: CheckersBoard;
  currentTurn: Color;
}
//----------------------------------------------------------------------------------------------------------------------
//Store Model
//----------------------------------------------------------------------------------------------------------------------
export interface CheckersState {
  gameState: GameState;
  selectedPiecePosition: [number, number] | null;
}


export const initialState: GameState = {
  board: {
    grid: [
      [
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        }
      ],
      [
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null
      ],
      [
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        },
        null,
        {
          "color": Color.WHITE,
          "king": false
        }
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null
      ],
      [
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        }
      ],
      [
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null,
        {
          "color": Color.BLACK,
          "king": false
        },
        null
      ]
    ]
  },
  currentTurn: Color.WHITE
}
