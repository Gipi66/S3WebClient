import { TestBed, inject } from '@angular/core/testing';

import { LoginActivateService } from './login-activate.service';

describe('LoginActivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginActivateService]
    });
  });

  it('should be created', inject([LoginActivateService], (service: LoginActivateService) => {
    expect(service).toBeTruthy();
  }));
});
