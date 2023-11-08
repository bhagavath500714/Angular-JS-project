import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularformsComponent } from './angularforms.component';

describe('AngularformsComponent', () => {
  let component: AngularformsComponent;
  let fixture: ComponentFixture<AngularformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularformsComponent]
    });
    fixture = TestBed.createComponent(AngularformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
