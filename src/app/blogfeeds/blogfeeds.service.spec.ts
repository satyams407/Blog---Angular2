import { TestBed, inject } from '@angular/core/testing';

import { BlogfeedsService } from './blogfeeds.service';

describe('BlogfeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogfeedsService]
    });
  });

  it('should be created', inject([BlogfeedsService], (service: BlogfeedsService) => {
    expect(service).toBeTruthy();
  }));
});
