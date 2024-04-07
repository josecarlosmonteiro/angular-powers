import { TestBed } from '@angular/core/testing';

import { PowerStateService } from './power-state.service';

describe('PowerStateService', () => {
  let service: PowerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
