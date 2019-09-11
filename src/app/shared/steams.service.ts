import { Injectable } from '@angular/core';
import { Observable, from, interval } from 'rxjs';
import names from './names';
import { scan, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SteamsService {
  constructor() { }

  ready(): Observable<string[]> {
    const empty: string[] = [];
    return from(names)
    .pipe(
      scan((acc: string[], v: string) => acc.concat(v), empty)
    );
  }
  changeTime(): Observable<string> {
    const skazka = 'Колобок – это знакомая каждому взрослому сказка, которая может стать открытием для каждого маленького ребенка. Он с удовольствием будет подпевать простой и такой познавательный текст песенки главного героя сказки. Ведь для того, чтобы познакомить его с персонажами не только дома, но и леса, нужно просто читать сказку Колобок на нашем сайте. Вы порадуете малыша веселыми приключениями колобка и сможете научить его быть более осторожным с окружающим его миром, если он не хочет быть съеденным.';
    return interval(25)
    .pipe(
      take(skazka.length),
      map(v => skazka[v]),
      scan((acc, v) => acc.concat(v), '')
    );
  }
}
