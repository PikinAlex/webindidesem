import { TestBed } from '@angular/core/testing';

import { EvolucionMetaService } from './evolucion-meta.service';

describe('EvolucionMetaService', () => {
  let service: EvolucionMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolucionMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
