import { Component } from '@angular/core';

import {
  UserApi,
  LoginForm,
  User
} from '../../api/user';

import {
  UserConstants
} from '../../globals';

import { Router } from '@angular/router';

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
  public constructor(private userApi: UserApi, private user : UserConstants, private router : Router) { }

  private loginForm : LoginForm = {
    Email : '',
    Password: ''
  }

  public doLogin(): void {
    this.userApi.authenticate(this.loginForm).subscribe(
      resp => {
        this.user.setUser(resp.Email, resp.Location, resp.Name, resp.Id);

        this.user.userLoggedIn = true;

        this.router.navigate(['/books']);
      },
      error => console.log(error)
    );
  }
}
