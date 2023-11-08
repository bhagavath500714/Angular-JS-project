import { Component } from '@angular/core';

@Component({
  selector: 'app-list-parent',
  templateUrl: './list-parent.component.html',
  styleUrls: ['./list-parent.component.scss']
})
export class ListParentComponent {
  cars:string[] = [];

  carDataUpdated(carsData:string[]) {
    this.cars = carsData;
  }

}
