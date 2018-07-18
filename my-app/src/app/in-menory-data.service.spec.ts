import { TestBed, inject } from '@angular/core/testing';

import { InMenoryDataService } from './in-menory-data.service';

describe('InMenoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMenoryDataService]
    });
  });

  it('should be created', inject([InMenoryDataService], (service: InMenoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
