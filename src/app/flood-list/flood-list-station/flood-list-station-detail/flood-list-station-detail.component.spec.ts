import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodListStationDetailComponent } from './flood-list-station-detail.component';

describe('FloodListStationDetailComponent', () => {
  let component: FloodListStationDetailComponent;
  let fixture: ComponentFixture<FloodListStationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloodListStationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodListStationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
