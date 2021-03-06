import {Injectable} from '@angular/core';
import {AuthToken} from '../../models/AuthToken';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTokenKey = 'auth';

  constructor() {
  }

  /**
   * Alias this.isExistAuthToken()
   */
  public isLoggedIn(): boolean {
    return this.isExistAuthToken();
  }

  public getAuthToken(): AuthToken {
    return JSON.parse(localStorage.getItem(this.authTokenKey));
  }

  public setAuthToken(authToken: AuthToken): void {
    localStorage.setItem(this.authTokenKey, JSON.stringify(authToken));
  }

  public clearAuthToken(): void {
    localStorage.removeItem(this.authTokenKey);
  }

  public login(): Observable<string> {
    return Observable.create("");
  }

  public isExistAuthToken(): boolean {
    let result = false;
    const token = this.getAuthToken();
    if (token != null && token.accessKey.trim() !== '' && token.secretKey.trim() !== '') {
      result = true;
    }
    return result;
  }
}
