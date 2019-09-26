import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, CdkDragEnd, CdkDragStart, CdkDragMove } from '@angular/cdk/drag-drop';
import FactoryPiece from './piece';
import Coordinate from './piece/position';
import Hource from './piece/hourse';
import Rook from './piece/rook';
import { showHide, flyInOut } from '../app.animations';

@Component({
  selector: 'app-hource',
  templateUrl: './hource.component.html',
  styleUrls: ['./hource.component.scss'],
  animations: [showHide, flyInOut],
})
export class HourceComponent implements OnInit {

  private coords: Coordinate[] = [];
  private hourse: Hource;
  private moved: boolean;
  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    let x=1, y=8;
    for(let i = 0; i < 64; i++) {
      if(x > 8) {
        x = 1;
        y++;
      }
      this.coords[i] = FactoryPiece.create(x,y);
      x++;
      if((i % 2 === 0 && y % 2 === 0) || (i % 2 !== 0 && y % 2 !== 0)) {
        this.coords[i].color = 'ligth';
      } else {
        this.coords[i].color = 'dark'
      }
    }
    const h = this.coords[Math.floor(this.coords.length * Math.random())];
    this.hourse = FactoryPiece.create(h.posX, h.posY, 'hourse');
    this.hourse.next();
  }
  isMoved(coord: Coordinate) {
    if(this.moved){
      return this.hourse.isStep(coord)
    }
    return this.moved;
  }
  next(h: Coordinate) {
    if(this.hourse.isStep(h) && this.moved){
      this.hourse = FactoryPiece.create(h.posX, h.posY, 'hourse');
      this.hourse.next();
      this.moved = false;
    }
  }
  dropMove(event: CdkDragDrop<Coordinate>) {
    const cord = event.item.data.filter(c => {
      const { posX, posY } = event.container.data;
      if(c.posX == posX && c.posY === posY){
        return c;
      }
      return false
    })
    if (cord.length > 0) {
      this.next(cord[0]);
    }
  }  
  dragStart(e: CdkDragStart) {
    // const rect = e.source.element.nativeElement.getBoundingClientRect();
    this.moved = !this.moved;
  }
  dragMoved(e: CdkDragMove) {
    this.moved = true;
  }
  dragEnded(e: CdkDragEnd) {
  }
}