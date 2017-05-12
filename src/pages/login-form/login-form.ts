import {
  Component
} from '@angular/core';

import {
   Router
} from '@angular/router';

import {
  User,
  UserApi,
  LoginForm
} from '../../api/user';

import {
  UserConstants
} from '../../api/globals';

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
   * @private
   * @type {LoginForm}
   * @memberof LoginFormComponent
   */
  private loginForm: LoginForm = {
    Email : '',
    Password: ''
  };

  /**
   * Creates an instance of LoginFormComponent.
   * @param {UserApi} userApi
   * @memberOf LoginFormComponent
   */
  public constructor(
    private router: Router,
    private userApi: UserApi,
    private userConstants: UserConstants
  ) { }

  /**
   * @memberof LoginFormComponent
   */
  public doLogin(): void {
    this.userApi.authenticate(this.loginForm).subscribe(
      resp => {
        this.userConstants.setUser(resp.Email, resp.Location, resp.Name, resp.Id);
        this.userConstants.userLoggedIn = true;
        this.router.navigate(['/books']);
      },
      error => console.log(error)
    );
  }
}
