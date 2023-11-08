import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
  // self-contained and reusable unit of code that encapsulates logic, data, and UI elements. Unlike regular components, standalone components are not dependent on Angular's NgModule system for their configuration and dependencies.
  // standalone: true,
  // imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select('counter');
  }
}
