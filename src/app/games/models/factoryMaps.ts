import { Position } from './position';
import { PlayerMaps } from '.';

export class FactoryMaps {
    static get list() {
        return {
            simple: Position,
        };
    }

    static create(posX: number, posY: number, type: string = 'simple') {
        const Coordinate = FactoryMaps.list[type] || FactoryMaps.list.simple;
        const member = new Coordinate(posX, posY);
        member.type = type;
        member.define = function(){
            console.log(`${this.name}: (${this.type})`)
        }
        return member;
    }
}