export default class Coordinate {
  private _posX: number
  private _posY: number
  private _color: string
  private _indexMap: number;
  constructor(posX: number, posY: number) {
    this._posX = posX;
    this._posY = posY;
    this._color = 'white';
    this._indexMap = -1;
  }
  get posX(): number { return this._posX }
  get posY(): number { return this._posY }
  get color(): string { return this._color }
  set color(color: string) { this._color = color }
  get indexMap(): number { return this._indexMap }
  set indexMap(indexMap: number) { this._indexMap = indexMap }
}