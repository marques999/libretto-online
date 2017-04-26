import { Component } from '@angular/core';

import {
  UserApi
} from '../../api/user';

/**
 * @export
 * @class LoginFormComponent
 */
@Component({
  selector: 'login-form',
  template: require('./login-form.html')
})
export class LoginFormComponent {

  /**
   * Creates an instance of LoginFormComponent.
   * @param {UserApi} userApi
   * @memberOf LoginFormComponent
   */
  public constructor(private userApi: UserApi) { }
}
