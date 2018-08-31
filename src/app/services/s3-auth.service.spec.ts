import { TestBed, inject } from '@angular/core/testing';

import { S3AuthService } from './s3-auth.service';

describe('S3AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S3AuthService]
    });
  });

  it('should be created', inject([S3AuthService], (service: S3AuthService) => {
    expect(service).toBeTruthy();
  }));
});
