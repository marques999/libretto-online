import {
  Component
} from '@angular/core';

import {
  User
} from '../../api/user/';

import {
  UserConstants
 } from '../../api/globals';

import {
  LocalStorageService
} from '../../../node_modules/angular-2-local-storage';

/**
 * @export
 * @class HeaderComponent
 */
@Component({
  selector: 'fountain-header',
  template: require('./header.html')
})
export class HeaderComponent {

  /**
   * Creates an instance of HeaderComponent.
   * @param {UserConstants} userConstants
   * @param {LocalStorageService} localStorage
   * @memberof HeaderComponent
   */
  constructor(
    private userConstants: UserConstants,
    private localStorage: LocalStorageService
  ) {}

  /**
   * @memberof HeaderComponent
   */
  public doLogout(): void {
    this.userConstants.logout();
  }
}
