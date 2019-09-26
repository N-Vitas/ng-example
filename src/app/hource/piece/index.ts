import Coordinate from './position';
import Hource from './hourse';
import Rook from './rook';

export default class FactoryPiece {
    static get list() {
        return {
            simple: Coordinate,
            hourse: Hource,
            rook: Rook,
        };
    }

    static create(posX: number, posY: number, type: string = 'simple') {
        const Coordinate = FactoryPiece.list[type] || FactoryPiece.list.simple;
        const member = new Coordinate(posX, posY);
        member.type = type;
        member.define = function(){
            console.log(`${this.name}: (${this.type})`)
        }
        // FactoryPiece.models.push(member);
        return member;
    }
}