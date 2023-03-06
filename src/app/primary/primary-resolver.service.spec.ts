import { TestBed } from '@angular/core/testing';

import { PrimaryResolverService } from './primary-resolver.service';

describe('PrimaryResolverService', () => {
  let service: PrimaryResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimaryResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
