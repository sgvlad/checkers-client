import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {GameState} from '../interfaces/checkers.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckersApiService {

  #httpClient = inject(HttpClient);

  public getGame() {
    return this.#httpClient.get<GameState>(`${environment.urlBackend}/api/game/state`);
  }

}
