import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFilterReduceComponent } from './map-filter-reduce.component';

describe('MapFilterReduceComponent', () => {
  let component: MapFilterReduceComponent;
  let fixture: ComponentFixture<MapFilterReduceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapFilterReduceComponent]
    });
    fixture = TestBed.createComponent(MapFilterReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
