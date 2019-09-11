import { Component, Input } from '@angular/core';
import { openClose, flipBoxFront, flipBoxBack } from '../../app.animations';

export interface Card {
  name: string
  action: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    openClose,
    flipBoxFront,
    flipBoxBack
  ],
})
export class CardComponent{

  @Input() card: Card;

  constructor() {
  }
  change() {
    this.card.action = !this.card.action;
  }
}
