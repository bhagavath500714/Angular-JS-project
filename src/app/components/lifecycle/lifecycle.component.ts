import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent {
  title = 'test'
  titles: string[] = [];
  showHead: boolean = true;

  addTitle() {
    this.titles.push(this.title);
    console.log(this.titles);
    
  }

}
