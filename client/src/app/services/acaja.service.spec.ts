import { TestBed } from '@angular/core/testing';

import { ACajaService } from './acaja.service';

describe('ACajaService', () => {
  let service: ACajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ACajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
