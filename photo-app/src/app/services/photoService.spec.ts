import { TestBed } from '@angular/core/testing';

import { PhotoServiceService } from './photoService';

describe('PhotoServiceService', () => {
  let service: PhotoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
