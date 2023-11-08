import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environment';
// import { AuthErrorService } from 'app/services/auth-error/auth-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  formUrl(route: string) {
    let paramDelimiter = route.indexOf('?') > -1 ? '&' : '?';
    if (
      route.includes(environment.apiRouterURL) ||
      route.includes(environment.cpqApiUrl) ||
      route.includes(environment.orderingAPI) ||
      route.includes(environment.apiPricingUrl) ||
      route.includes(environment.apiUrl) ||
      route.includes('connectbase.com') ||
      route.includes('/change-password') ||
      route.includes('/signup') ||
      route.includes('/createAccount') ||
      route.includes('/oktaUser') ||
      route.includes('/oktaAuthn') ||
      route.includes(environment.NNA_BACKEND_URL)
      )
        return route;
    else
      return `${environment.apiUrl}${route}`;
  }

  getHeaders() {
    const headersConfig = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,PATCH,DELETE,OPTIONS'/* ,
      'Authorization': 'Bearer ' + localStorage.getItem('token') */
    };
    return new HttpHeaders(headersConfig);
  }

  /**
 * Make HTTP request without Authentication Header
 * @param method
 * @param api
 * @param body
 * @param options
 * @param successCallback
 * @param errorCallback
 */

  makeHttpRequest(method: string, route: string, queryParams: any, body: any, requestHeaders?: any): Observable<any> {
  let result: Observable<any>;
  let api = this.formUrl(route);
  let headers: HttpHeaders;
  const token = localStorage.getItem("token");

  if (requestHeaders) {
    headers = new HttpHeaders(requestHeaders);
  } else {
    headers = new HttpHeaders({
      Authorization: token ? token : '' // Use token if available, otherwise use an empty string
    });
  }

  let options = { params: queryParams, headers: headers };
  return this.callRequest(method, api, body, options, headers);
}

  private callRequest(method:string, api:string, body:any, options:any, headers:any) {
    let result: Observable<any> = new Observable(); // Initialize with an empty observable
    switch(method) {
      case 'GET':
        result = this.http.get(api, options);
        break;
      case 'POST':
        result = this.http.post(api, body, options);
        break;
      case 'PUT':
        result = this.http.put(api, body, options);
        break;
      case 'PATCH':
        result = this.http.patch(api, body, options);
        break;
      case 'DELETE':
        result = this.http.delete(api, options);
        break;
      case 'UPLOAD':
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");

        result = this.http.post(api, body, { headers } );
        break;
      case 'DOWNLOAD':
        result = this.http.get(api, { headers, responseType:'blob' } );
        break;
    }
    return result;
  }

  processHttpRequest(method:string, route:string, queryParams:any, body:any, successCallback:any, errorCallback:any) {
    let httpReq = this.makeHttpRequest(method, route, queryParams, body);
    let httpObserve = httpReq.subscribe({
        next: (response) => {
          if(successCallback)
            successCallback(response);
        },
        error: (error) => {
          if(errorCallback)
            errorCallback(error);
        },
      });
    return httpObserve;
  }
}
