import { TestBed } from '@angular/core/testing';

import { FloodDataService } from './flood-data.service';

describe('FloodDataService', () => {
  let service: FloodDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloodDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
