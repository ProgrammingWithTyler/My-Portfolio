import { TestBed } from '@angular/core/testing';

import { RecommendationsService } from '../recommendations.service';

describe('RecommendationsServiceService', () => {
  let service: RecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
