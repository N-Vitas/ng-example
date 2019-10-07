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
    bubbleSort(arr: number[], end: boolean = true): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let wasSwap = false;
            for (let j = 0; j < arr.length - i; j++) {
                if(end){
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        wasSwap = true;
                    }
                } else {
                    if (arr[j] < arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        wasSwap = true;
                    }
                }
            }
            if (!wasSwap) break;
        }
        return arr;
    }
    bubbleSortPosX(): void {
        const arr = Array.from(this.cards.entries());
        for (let i = 0; i < arr.length - 1; i++) {
            let wasSwap = false;
            for (let j = 0; j < (arr.length - i); j++) {
                if(j == 99) { break; } // Выходим если это последний этап
                if(arr[j][1].posX < 6){
                    if (arr[j][1].index && !arr[j + 1][1].index) {
                        arr[j][1].index = false;
                        arr[j + 1][1].index = true;
                        wasSwap = true;
                    }
                } else {
                    if (!arr[j][1].index && arr[j + 1][1].index) {
                        arr[j][1].index = true;
                        arr[j + 1][1].index = false;
                        wasSwap = true;
                    }
                }
            }
            if (!wasSwap) break;
        }
        this.cards = new Map<string, Position>(arr);
    }
    bubbleSortPosY(): void {
        const arr = Array.from(this.cards.entries());
        for (let i = 0; i < arr.length - 1; i++) {
            let wasSwap = false;
            for (let j = 0; j < (arr.length - i); j++) {
                // if(j == 99) { break; } // Выходим если это последний этап
                if(arr[j][1].posY < 15){
                    if (arr[j][1].index && !arr[j + 10][1].index) {
                        arr[j][1].index = false;
                        arr[j + 10][1].index = true;
                        wasSwap = true;
                    }
                } else {
                    if (arr[j][1].index && !arr[j - 10][1].index) {
                        arr[j][1].index = false;
                        arr[j - 10][1].index = true;
                        wasSwap = true;
                    }
                }
            }
            if (!wasSwap) break;
        }
        this.cards = new Map<string, Position>(arr);
    }
    generate() {
        // генерация карты
        let x=1, y=10;
        for(let i = 0; i < 100; i++) {
            if(x > 10) {
                x = 1;
                y++;
            }
            this.cards.set(`x${x}y${y}`, FactoryMaps.create(x,y));
            x++;
            // if((i % 2 === 0 && y % 2 === 0) || (i % 2 !== 0 && y % 2 !== 0)) {
            //     this.coords[i].color = 'ligth';
            // } else {
            //     this.coords[i].color = 'dark'
            // }
        }
        // Случайное создание карт гор
        const arr = Array.from(this.cards.keys());
        const indexs: Map<string, string> = new Map<string, string>();
        while(indexs.size < 16) {
            const index = arr[Math.floor(Math.random() * this.cards.size)];
            const pos = this.cards.get(index);
            // освобождаю крайние клетки
            if(pos.posX < 3) { continue }
            if(pos.posY < 12) { continue }
            if(pos.posY > 17) { continue }
            if(pos.posX > 7) { continue }
            pos.index = true;
            this.cards.set(index, pos);
            indexs.set(index, index);
        }
        this.bubbleSortPosX();
        this.bubbleSortPosY();
    }
    getCards(): Map<string, Position> { return this.cards }
}