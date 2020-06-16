import { TestBed } from '@angular/core/testing';

import { CrearMetaService } from './crear-meta.service';

describe('CrearMetaService', () => {
  let service: CrearMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
