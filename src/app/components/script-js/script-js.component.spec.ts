import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptJSComponent } from './script-js.component';

describe('ScriptJSComponent', () => {
  let component: ScriptJSComponent;
  let fixture: ComponentFixture<ScriptJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptJSComponent]
    });
    fixture = TestBed.createComponent(ScriptJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
