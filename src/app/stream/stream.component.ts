import { Component } from '@angular/core';
import { SteamsService } from '../shared/steams.service'

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent {
  public result: string = '';
  constructor(private stream: SteamsService) { }

  ready() {
    this.stream.ready().subscribe(r => {
      this.result = r.join(' ')
    });
  }
  changeTime() {
    this.stream.changeTime().subscribe(r => {
      this.result = r
    });
  }
}
