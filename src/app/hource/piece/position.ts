export default class Coordinate {
  private _posX: number
  private _posY: number
  private _color: string
  constructor(posX: number, posY: number) {
    this._posX = posX;
    this._posY = posY;
    this._color = 'white';
  }
  get posX(): number { return this._posX }
  get posY(): number { return this._posY }
  get color(): string { return this._color }
  set color(color: string) { this._color = color }
}