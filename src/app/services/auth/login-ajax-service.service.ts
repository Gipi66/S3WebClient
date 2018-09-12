import {Injectable} from '@angular/core';
import {AjaxServiceService} from '../ajax/ajax-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAjaxServiceService {

  constructor(private ajaxService: AjaxServiceService) {
  }

  public login(): Observable {
    this.ajaxService.get();
  }
}
