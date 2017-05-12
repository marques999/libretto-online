import {
  Injectable
} from '@angular/core';

import {
  User,
  UserApi
} from '../user';

import {
  LocalStorageService
} from 'angular-2-local-storage';

@Injectable()
export class UserConstants {

  /**
   * @type {boolean}
   * @memberof UserConstants
   */
  public userLoggedIn: boolean = false;

  /**
   * @private
   * @type {User}
   * @memberof UserConstants
   */
  private user: User = {
    id: '',
    email: '',
    location: '',
    fullName: '',
  };

  /**
   * Creates an instance of UserConstants.
   * @param {LocalStorageService} localStorage
   * @memberof UserConstants
   */
  public constructor(public localStorage: LocalStorageService) {

    this.user = this.localStorage.get<User>('user');

    if (this.user !== undefined && this.user.id !== undefined) {
      this.userLoggedIn = true;
    }
  }

  /**
   * @returns {User}
   * @memberof UserConstants
   */
  public getUser(): User {
    return this.user;
  }

  /**
   * @memberof UserConstants
   */
  public logout(): void {

    this.user =  {
      id: '',
      email: '',
      location: '',
      fullName: '',
    };

    this.userLoggedIn = false;
    this.localStorage.set('user', this.user);
  }

  /**
   * @param {string} email
   * @param {string} location
   * @param {string} name
   * @param {string} id
   * @memberof UserConstants
   */
  public setUser(email: string, location: string, name: string, id: string): void {
    this.user.id = id;
    this.user.email = email;
    this.user.fullName = name;
    this.user.location = location;
    this.localStorage.set('user', this.user);
  }
}
