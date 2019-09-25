import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import FactoryPiece from './piece';
import Coordinate from './piece/position';
import Hource from './piece/hourse';

@Component({
  selector: 'app-hource',
  templateUrl: './hource.component.html',
  styleUrls: ['./hource.component.scss']
})
export class HourceComponent implements OnInit {

  private coords: Coordinate[] = [];
  private hourse: Hource;
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

  next(h: Coordinate) {
    if(this.hourse.isStep(h)){
      this.hourse = FactoryPiece.create(h.posX, h.posY, 'hourse');
      this.hourse.next();
    }
  }
  dragMoved(e) {
    console.log(e);
  }
  dropMove(event: CdkDragDrop<Coordinate>, callback: (cord: Coordinate)=>{}) {
    const cord = event.item.data.filter(c => {
      const { posX, posY } = event.container.data;
      if(c.posX == posX && c.posY === posY){
        return c;
      }
      return false
    })
    console.log(this.next(cord))
    if (cord) {
      callback(cord);
    }
    // else {
    //    transferArrayItem(event.previousContainer.data,
    //    event.container.data,
    //    event.previousIndex,
    //    event.currentIndex);
    // }
  }

}