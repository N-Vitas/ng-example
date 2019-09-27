import { Subject } from 'rxjs';
import { Player } from './player';
import { Position } from './position';
import { FactoryMaps } from './factoryMaps';

export declare interface Maps {
    register(user: Player): void
}
export declare interface AbstractPlayerMaps {
    setMap(map: PlayerMaps): void
    getMap(): PlayerMaps
}

export class PlayerMaps implements Maps {
    protected users: Map<string, Player> = new Map();
    protected cards: Map<string, Position> = new Map();
    public receive: Subject<string> = new Subject();
    constructor() {}
    register(user: Player) {
        this.users.set(user.name, user);
        user.setMap(this);
    }
    send(message: string, from: Player, to: Player) {
        if(to) {
            to.receive(message, from);
        } else {
            for(let [name, user] of this.users){
                if(name !== from.name) {
                    user.receive(message, from);
                }
            }
        }
    }
    generate() {
        let x=1, y=8;
        for(let i = 0; i < 64; i++) {
            if(x > 8) {
                x = 1;
                y++;
            }
            this.cards.set(`x${x}y${y}`, FactoryMaps.create(x,y));
            x++;
        }
    }
    getCards(): Map<string, Position> { return this.cards }
}