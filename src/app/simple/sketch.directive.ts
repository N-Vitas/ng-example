import { Directive, ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

interface Pos {
  x1: number
  y1: number
  x2: number
  y2: number
  x3: number
  y3: number
  x4: number
  y4: number
}

@Directive({
  selector: '[appSketch]'
})
export class SketchDirective {

  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private sprite: HTMLImageElement;
  private pos: Pos[] = [];
  constructor(private el: ElementRef) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.el.nativeElement.appendChild(this.canvas);
    this.resizeWorks();
    this._loadImages();
  }
  
  private resizeWorks(): void {
      this.canvas.width = 40;
      this.canvas.height = 40;
  }

  private _loadImages(): void {
    const t = this;
    const img = new Image();
    img.onload = () => {
      t.sprite = img;
      t.update()
    };
    img.src = 'assets/images/example.png';
  }
  private update (): void {
    if (this.pos.length == 0) {
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: 0, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -35, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -75, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -115, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -155, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -195, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -235, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -275, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -315, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -355, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -395, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -435, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -475, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
      this.pos.push({x1: 0, y1: 118, x2: this.sprite.width, y2: this.sprite.height,x3: -510, y3: 0, x4: this.sprite.width, y4: this.sprite.height})
    }
    interval(25).pipe(map(i => i %this.pos.length)).subscribe(i => {
      const { x1, x2, x3, x4, y1, y2, y3, y4 } = this.pos[i];
      this.ctx.clearRect(0, 0, x4, y4);
      this.ctx.drawImage(this.sprite, x1, y1, x2, y2,x3, y3, x4, y4);
    });
    // this.ctx.drawImage(this.sprite, 0, 120, this.sprite.width /2, this.sprite.height /2, 0, 3, this.sprite.width*2, this.sprite.height*2)
  }
}
