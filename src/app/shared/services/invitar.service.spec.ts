import { TestBed } from '@angular/core/testing';

import { InvitarService } from './invitar.service';

describe('InvitarService', () => {
  let service: InvitarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
