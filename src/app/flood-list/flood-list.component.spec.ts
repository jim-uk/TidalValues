import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodListComponent } from './flood-list.component';

describe('FloodListComponent', () => {
  let component: FloodListComponent;
  let fixture: ComponentFixture<FloodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
