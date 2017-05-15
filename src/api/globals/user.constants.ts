import {
  Injectable
} from '@angular/core';

import {
  LocalStorageService
} from 'angular-2-local-storage';

import {
  User,
  UserApi
} from '../user';

@Injectable()
export class UserConstants {

  /**
   * @type {boolean}
   * @memberof UserConstants
   */
  public loggedIn: boolean = false;

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

    if(this.user == null){
      this.user = {
        id: '',
        email: '',
        location: '',
        fullName: '',
      }   
    }

    if (this.user && this.user.id) {
      this.loggedIn = true;
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
    this.loggedIn = false;
    this.setUser('', '', '', '');
  }

  /**
   * @param {string} email
   * @param {string} location
   * @param {string} name
   * @param {string} id
   * @memberof UserConstants
   */
  public setUser(email: string, location: string, name: string, id: string): void {
    console.log("HERER");
    console.log(this.user);
    this.user.id = id;
    this.user.email = email;
    this.user.fullName = name;
    this.user.location = location;
    this.localStorage.set('user', this.user);
  }
}
