import {patchState, signalStore, withHooks, withMethods, withProps, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {tap} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {withDevtools} from '@angular-architects/ngrx-toolkit';
import {CheckersApiService} from '../services/checkers-api.service';
import {withRouteParams} from './feature/route/route-params.feature';
import {CheckersState, GameState, initialState} from '../interfaces/checkers.interface';


export const CheckersStore = signalStore(
  withDevtools('checkers'),
  withRouteParams({ gameId: (param) => param }),
  withProps(() => ({
    checkersApi: inject(CheckersApiService),
  })),
  withState<CheckersState>(() => ({
    gameState: initialState,
    selectedPiecePosition: null
  })),
  withMethods(({checkersApi, ...store}) => ({
    setSelectedPiece(selectedPiecePosition: [number, number] | null): void {
      patchState(store, {selectedPiecePosition});
    },
    updateGameState(gameState: GameState): void {
      patchState(store, {gameState});
    },
    loadGame: rxMethod<void>(
      switchMap(() => checkersApi.getGame().pipe(
        tap((gameState: GameState) => {
          patchState(store, {gameState});
        })
      ))
    )
  })),

  withHooks({
    onInit({...store}) {
      store.loadGame();
    }
  })
);
