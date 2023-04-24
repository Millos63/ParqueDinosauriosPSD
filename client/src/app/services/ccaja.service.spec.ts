import { TestBed } from '@angular/core/testing';

import { CCajaService } from './ccaja.service';

describe('CCajaService', () => {
  let service: CCajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CCajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
