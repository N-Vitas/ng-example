import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SteamsService } from '../shared/steams.service'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  title = 'Angular 8 Project!';
  public personaldetails = [];
  constructor(private myservice: SteamsService) {}
  ngOnInit() {
     this.myservice.ready().subscribe((data) => (this.personaldetails = data));
  }
  onDrop(event: CdkDragDrop<string[]>) {
     if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, 
           event.previousIndex, event.currentIndex);
     } else {
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
     }
  }

}
