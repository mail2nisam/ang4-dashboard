import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  public headers: Headers
  constructor(private http: Http) {
    this.headers =  new Headers();
    this.headers.set('Authorization', 'Bearer kVLRLOIKYD0oiUnBloZZV7dEhAggMygLaEekmkIfSbPS3lFJgGGd5BUcuEIm');
  }
  private api_url = 'http://laravel-api.app/api/items/influencers';
  getItems() {
    return this.http.get(this.api_url, { headers: this.headers})
        .map((res: Response) => res.json());
  }

}
