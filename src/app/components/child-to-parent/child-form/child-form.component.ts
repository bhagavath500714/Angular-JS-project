import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent {
  @Output() carAdded:EventEmitter<string[]> = new EventEmitter;

  cars:string[] =[];
  carName="";
  addCar() {
    this.cars.push(this.carName);
    this.carName="";
    console.log(this.cars);
    this.carAdded.emit(this.cars);
  }

}
