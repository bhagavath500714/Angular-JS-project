import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParentComponent } from './list-parent.component';

describe('ListParentComponent', () => {
  let component: ListParentComponent;
  let fixture: ComponentFixture<ListParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParentComponent]
    });
    fixture = TestBed.createComponent(ListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
