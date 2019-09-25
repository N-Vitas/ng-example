import Coordinate from './position';

export default class Hource extends Coordinate {
    private _step: Coordinate[] = [];
    private _nextstep: Coordinate;
    get nextstep(): Coordinate { return this._nextstep }
    getStep(): Coordinate[] { return this._step }
    isStep(step: Coordinate): boolean {
      const f = this._step.filter(cord => {
        if(step.posX === cord.posX && step.posY === cord.posY) {
          return cord;
        }
        return false;
      })
      return f.length > 0;
    }
    addStep(coord: Coordinate) {
      const x = [-3,-2,-1,9,10];
      const y = [5,6,7,16,17];
      if( x.indexOf(coord.posX) != -1 || y.indexOf(coord.posY) != -1) {
        return;
      }
      this._step.push(coord);
    }
    next() {
      this.addStep(new Coordinate(this.posX + 1, this.posY + 2));
      this.addStep(new Coordinate(this.posX + 2, this.posY + 1))
      this.addStep(new Coordinate(this.posX + 2, this.posY - 1))
      this.addStep(new Coordinate(this.posX + 1, this.posY - 2))
      this.addStep(new Coordinate(this.posX - 1, this.posY - 2))
      this.addStep(new Coordinate(this.posX - 2, this.posY - 1))
      this.addStep(new Coordinate(this.posX - 2, this.posY + 1))
      this.addStep(new Coordinate(this.posX - 1, this.posY + 2))
    }
    nextStep(): Coordinate {
      const nextstep = [];
      const v = this.getStep();
      v.forEach(coord => {
        const hourse = new Hource(coord.posX, coord.posY);
        hourse.next();
        nextstep.push(hourse.getStep().length)
      });
      nextstep.sort();
      if(v[nextstep[0]]) {
        this._nextstep = new Coordinate(v[nextstep[0]].posX, v[nextstep[0]].posY);
      }
      this._nextstep = new Coordinate(v[0].posX, v[0].posY);
      return this._nextstep;
    }
  }