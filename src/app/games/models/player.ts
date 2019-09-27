import { PlayerMaps, AbstractPlayerMaps } from './playerMaps';
import { Color } from './color';

export class Player implements AbstractPlayerMaps {
    public name: string;
    public color: Color;

    private _playerMaps: PlayerMaps;

    constructor(name: string, color: Color) {
        this.name = name;
        this.color = color;
    }
    send(message: string, to: Player = null) {
        this.getMap().send(message, this, to);
    }
    receive(message: string, user: Player) {
        this.getMap().receive.next(`${user.name} пишет => (для ${this.name}) Сообщение: ${message}`);
    }
    setMap(map: PlayerMaps): void {
        this._playerMaps = map;
    }
    getMap(): PlayerMaps {
        return this._playerMaps;
    }
}