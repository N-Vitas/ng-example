import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import names from '../../../shared/names';
import { Card } from '../card/card.component';
import { scan } from 'rxjs/operators';
import { openClose, flipBoxFront, flipBoxBack } from '../../../app.animations';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  animations: [
    openClose,
    flipBoxFront,
    flipBoxBack
  ],
})
export class ExampleComponent implements OnInit {
  private cards: Card[] = [];
  private select: Card = this.empty();
  constructor() { 
    this.rand = this.rand.bind(this);
  }

  ngOnInit() {
    this.ready().subscribe(v => {
      this.cards = v.map((card, index) => ({...card, id: index}));
      this.refresh();
    })
  }

  empty(): Card {
    return { name: '' , action: false, disabled: true, id: 0 };
  }

  ready(): Observable<Card[]> {
    const empty: Card[] = [];
    return from(names)
    .pipe(
      scan((acc: Card[], v: string) => acc.concat({ name: v , action: true, disabled: false, id: 0 }), empty)
    );
  }
  rand(card:Card): Card {
    return this.cards[Math.floor((Math.random()*this.cards.length))];
  }
  refresh() {
    this.cards = this.cards.sort(() => 0.5 - Math.random())
  }
  add() {
    const newCard: Card = { name: `Карта ${this.cards.length}`, action: true, disabled: false, id: 0 };
    this.cards.push(newCard);
  }
  double(card: Card) {
  }
}
