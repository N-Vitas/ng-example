import { Injectable } from '@angular/core';
import { Player, PlayerMaps, TravelColor, White, Black, Red } from '../models';


@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private _map: PlayerMaps = new PlayerMaps();
  private _users: Map<string, Player> = new Map<string, Player>();
  constructor() {
    this.registerPlayer(new Player('Вася', TravelColor.travel(new White())));
    this.registerPlayer(new Player('Лиза', TravelColor.travel(new Black())));
    this.registerPlayer(new Player('Петя', TravelColor.travel(new Red())));
  }
  send(message: string = '', from: string = '', to: string = '') {
    if(this._users.has(from)) {
      if(this._users.has(to)) {
        this._users.get(from).send(message, this._users.get(to));
      } else {
        this._users.get(from).send(message);
      }
    }
  }
  getMap(): PlayerMaps { return this._map }
  setMap(map: PlayerMaps): void { this._map = map }
  getPlayers(): Map<string, Player> { return this._users }
  registerPlayer(user: Player): void { 
    this._users.set(user.name, user);
    this._map.register(user);
  }
}
