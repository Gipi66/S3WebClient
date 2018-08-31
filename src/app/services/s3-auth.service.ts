import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S3AuthService {

  constructor() {
  }


  checkAuthToken(): boolean {
    return true;
  }
}
