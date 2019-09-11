import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import names from '../shared/names';
import { Card } from './card/card.component';
import { scan } from 'rxjs/operators';
import { openClose, flipBoxFront, flipBoxBack } from '../app.animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    openClose,
    flipBoxFront,
    flipBoxBack
  ],
})
export class GamesComponent implements OnInit {
  private cards: Card[] = [];
  constructor() { }

  ngOnInit() {
    this.ready().subscribe(v => this.cards = v)
  }

  ready(): Observable<Card[]> {
    const empty: Card[] = [];
    return from(names)
    .pipe(
      scan((acc: Card[], v: string) => acc.concat({ name: v , action: true }), empty)
    );
  }
  add() {
    const newCard: Card = { name: `Карта ${this.cards.length}`, action: true };
    this.cards.push(newCard);
  }

}
