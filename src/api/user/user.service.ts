import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Http,
  Headers
} from '@angular/http';

import {
  Observable
} from 'rxjs/Observable';

import {
  User,
  UserForm
} from './user.model';

import 'rxjs/add/operator/map';

/**
 * @export
 * @class UserApi
 */
@Injectable()
export class UserApi {

  /**
   * @private
   * @static
   * @type {string}
   * @memberOf UserApi
   */
  private static ENDPOINT: string = '/api/auth/:id';

  /**
   * Creates an instance of UserApi.
   * @param {Http} api
   * @memberOf UserApi
   */
  public constructor( @Inject(Http) private api: Http) { }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf UserApi
   */
  public getById(userEmail: string): Observable<User> {
    return this.api.get(UserApi.ENDPOINT.replace(/:id/, userEmail)).map(r => r.json());
  }

  /**
   * @param {string} username
   * @param {string} password
   * @returns {Observable<any>}
   * @memberOf UserApi
   */
  public authenticate(username: string, password: string): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(UserApi.ENDPOINT, JSON.stringify({
      username: username,
      password: password
    }), { headers }).map(r => r.json());
  }

  /**
   * @param {string} message
   * @returns {Observable<any>}
   * @memberOf UserApi
   */
  public insert(userInformation: UserForm): Observable<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.put(UserApi.ENDPOINT, JSON.stringify(userInformation), {
      headers
    }).map(r => r.json());
  }
}
