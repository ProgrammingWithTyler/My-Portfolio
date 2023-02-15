import { TestBed } from '@angular/core/testing';

import { ProjectsPageService } from '../projects-page.service';

describe('ProjectsPageService', () => {
  let service: ProjectsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
