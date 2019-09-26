import Coordinate from './position';

export default class Hource extends Coordinate {
    protected _step: Coordinate[] = [];
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
      const x = [-2,-1,0,9,10];
      const y = [5,6,7,16,17];
      if( x.indexOf(coord.posX) != -1 || y.indexOf(coord.posY) != -1) {
        return;
      }
      this._step.push(coord);
    }
    next() {
      this.addStep(new Coordinate(this.posX + 1, this.posY + 2));
      this.addStep(new Coordinate(this.posX + 2, this.posY + 1));
      this.addStep(new Coordinate(this.posX + 2, this.posY - 1));
      this.addStep(new Coordinate(this.posX + 1, this.posY - 2));
      this.addStep(new Coordinate(this.posX - 1, this.posY - 2));
      this.addStep(new Coordinate(this.posX - 2, this.posY - 1));
      this.addStep(new Coordinate(this.posX - 2, this.posY + 1));
      this.addStep(new Coordinate(this.posX - 1, this.posY + 2));
    }
    nextStep(t: Coordinate): Coordinate {
      const h = new Hource(t.posX, t.posY);
      h.next();
      const nextstep = [];
      const v = h.getStep();
      v.forEach(coord => {
        const hourse = new Hource(coord.posX, coord.posY);
        hourse.next();
        nextstep.push(hourse.getStep().length)
      });
      let k = nextstep.length;
      let count = nextstep[0];
      let index = 0;
      while(k--) {
        if(nextstep[k] < count) {
          count = nextstep[k];
          index = k;
        }
      }
      this._nextstep = new Coordinate(v[index].posX, v[index].posY);
      return this._nextstep;
    }
  }