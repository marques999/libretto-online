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
  UserForm,
  LoginForm
} from './user.model';

import {
  Constants
} from '../globals';

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
   * @param {Constants} CONSTANTS
   * @memberof UserApi
   */
  public constructor(@Inject(Http) private api: Http, private CONSTANTS: Constants) { }

  /**
   * @param {string} userEmail
   * @returns {Observable<User>}
   * @memberof UserApi
   */
  public getById(userEmail: string): Observable<User> {
    return this.api.get(UserApi.ENDPOINT.replace(/:id/, userEmail)).map(r => r.json());
  }

  /**
   * @param {LoginForm} loginCredentials
   * @returns {Observable<any>}
   * @memberof UserApi
   */
  public authenticate(loginCredentials: LoginForm): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'auth/login', JSON.stringify({
      Email: loginCredentials.Email,
      Password: loginCredentials.Password
    }), { headers }).map(r => r.json());
  }

  /**
   * @param {UserForm} userInformation
   * @returns {Observable<User>}
   * @memberof UserApi
   */
  public register(userInformation: UserForm): Observable<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'customers/add' , JSON.stringify(userInformation), {
      headers
    }).map(r => r.json());
  }
}
