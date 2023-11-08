import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  cars:string[] = [];
  carName="";
  addCar() {
    this.cars.push(this.carName);
    this.carName = '';
    console.log(this.cars);
  }

}
