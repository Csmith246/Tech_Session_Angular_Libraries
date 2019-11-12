import { TestBed } from '@angular/core/testing';

import { CommonCoreService } from './common-core.service';

describe('CommonCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonCoreService = TestBed.get(CommonCoreService);
    expect(service).toBeTruthy();
  });
});
