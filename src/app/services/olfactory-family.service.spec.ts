import { TestBed } from '@angular/core/testing';

import { OlfactoryFamilyService } from './olfactory-family.service';

describe('OlfactoryFamilyService', () => {
  let service: OlfactoryFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlfactoryFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
