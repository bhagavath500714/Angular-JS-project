import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHeadComponent } from './lifecycle-head.component';

describe('LifecycleHeadComponent', () => {
  let component: LifecycleHeadComponent;
  let fixture: ComponentFixture<LifecycleHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleHeadComponent]
    });
    fixture = TestBed.createComponent(LifecycleHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
