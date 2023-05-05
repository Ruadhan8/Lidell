import { TestBed } from '@angular/core/testing';

import { SavePageService } from './save-page.service';

describe('SavePageService', () => {
  let service: SavePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
