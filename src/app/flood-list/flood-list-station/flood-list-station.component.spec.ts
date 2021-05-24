import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodListStationComponent } from './flood-list-station.component';

describe('FloodListStationComponent', () => {
  let component: FloodListStationComponent;
  let fixture: ComponentFixture<FloodListStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloodListStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodListStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
