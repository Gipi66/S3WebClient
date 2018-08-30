import { TestBed, inject } from '@angular/core/testing';

import { S3ServiceService } from './s3-service.service';

describe('S3ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S3ServiceService]
    });
  });

  it('should be created', inject([S3ServiceService], (service: S3ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
