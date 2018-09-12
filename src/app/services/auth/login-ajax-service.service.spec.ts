import { TestBed, inject } from '@angular/core/testing';

import { LoginAjaxServiceService } from './login-ajax-service.service';

describe('LoginAjaxServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAjaxServiceService]
    });
  });

  it('should be created', inject([LoginAjaxServiceService], (service: LoginAjaxServiceService) => {
    expect(service).toBeTruthy();
  }));
});
