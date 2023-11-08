import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  value=''
  value1=''
  title = 'new title'
  num = 0;
  showMe:boolean = true;
  toDate = new Date();
  caseText: string = 'Hello World';
  price :number = 125;


  movies = [
    {"name": "Movie1", "title": "title 1"},
    {"name": "Movie2", "title": "title 2"},
    {"name": "Movie3", "title": "title 3"},
  ]




  handleInput(event:any) {
    // this.value = event.target.value;
    this.value = (event.target as HTMLInputElement).value;
  }
}
