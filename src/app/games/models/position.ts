import { PlayerMaps, AbstractPlayerMaps } from './playerMaps';

export class AbstractPosition implements AbstractPlayerMaps{
    private _posX: number;
    private _posY: number;
    private _color: string;
    private _type: string;
    private _index: any;
    private _playerMaps: PlayerMaps;
    get posX(): number { return this._posX };
    get posY(): number { return this._posY };
    get color(): string { return this._color };
    get type(): string { return this._type };
    get index(){ return this._index };
    set posX(posX: number){ this._posX = posX };
    set posY(posY: number){ this._posY = posY };
    set color(color: string){ this._color = color };
    set type(type: string){ this._type = type };
    set index(index: any){ this._index = index };
    constructor() {
        if (new.target === AbstractPosition) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
    setMap(map: PlayerMaps): void {
        this._playerMaps = map;
    }
    getMap(): PlayerMaps {
        return this._playerMaps;
    }
}

export class Position extends AbstractPosition {
    constructor(posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.color = 'white';
    }
}