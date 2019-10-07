import { Component, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Position } from './models';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  private from: string = 'Вася';
  private to: string = 'Лиза';
  private message: string = 'Привет';
  private list: string[] = [];
  private players: string[] = [];
  private coords: Position[] = [];
  // private leafs: Leaf[] = [new Leaf(1,1,10,10)];
  constructor(private mapService: MapsService) {}
  ngOnInit() {
    this.mapService.getMap().receive.subscribe(m => this.list.push(m));
    this.mapService.getMap().generate();
    this.mapService.getPlayers().forEach(player => this.players.push(player.name));
    this.mapService.getMap().getCards().forEach(coord => this.coords.push(coord));
    console.log(this.mapService.getMap())
  }
  send() {
    if(this.from.length > 0 && this.message.length > 0) {
      this.mapService.send(this.message, this.from, this.to);
    }
  }
}
