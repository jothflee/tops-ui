import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_VERSION : string = "/v0"
  constructor(private httpClient: HttpClient) {
    this.API_VERSION = environment.API_VERSION
   }


  Request(service : string, ...args :any[]) : Observable<any> {
    
      const url = `/${this.API_VERSION}/${service}`
      return this.httpClient.get(url)

  }
}
