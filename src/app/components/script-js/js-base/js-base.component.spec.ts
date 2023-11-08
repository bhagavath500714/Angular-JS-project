import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBaseComponent } from './js-base.component';

describe('JsBaseComponent', () => {
  let component: JsBaseComponent;
  let fixture: ComponentFixture<JsBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsBaseComponent]
    });
    fixture = TestBed.createComponent(JsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
