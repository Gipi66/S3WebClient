import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjaxServiceService {

  private serverHost = '127.0.1.1:8080';

  constructor(private http: HttpClient) {
  }

  get<T>(path: string,
         options?: {
           headers?: HttpHeaders | {
             [header: string]: string | string[];
           };
           observe?: 'body';
           params?: HttpParams | {
             [param: string]: string | string[];
           };
           reportProgress?: boolean;
           responseType?: 'json';
           withCredentials?: boolean;
         }): Observable<T> {
    console.log(this.getLink(path), options);
    return this.http.get<T>(this.getLink(path));
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(this.getLink(path), body);
  }

  private getLink(path: string): string {
    return `http://${this.serverHost}${path}`;
  }

}
