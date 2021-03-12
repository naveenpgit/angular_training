import { TestBed, inject } from '@angular/core/testing';

import { DeveloperDisplayService } from './developer-display.service';

describe('DeveloperDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeveloperDisplayService]
    });
  });

  it('should be created', inject([DeveloperDisplayService], (service: DeveloperDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
