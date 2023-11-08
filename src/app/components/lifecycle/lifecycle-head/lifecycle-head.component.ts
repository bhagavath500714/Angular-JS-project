import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-head',
  templateUrl: './lifecycle-head.component.html',
  styleUrls: ['./lifecycle-head.component.scss']
})
export class LifecycleHeadComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
  // @Input() text = ''
  @Input() text: string[] = []

  noOfTitles = 0;

  // this will not set for array type fit only for text
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called', changes);
    // console.log('current called', changes['text'].currentValue);
    // console.log('prev called', changes['text'].previousValue);

    // if(!changes['text'].isFirstChange()){
    //   console.log('overwrite the text');
      
    // }
    
  }

  ngOnInit(): void {
    this.text.push('first title');
    
  }

  ngDoCheck(): void {
    if (this.text.length > this.noOfTitles) {
      console.log('modify org value');
      this.noOfTitles++;
    }
    console.log('ngdocheck called');
    
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    
  }

}
