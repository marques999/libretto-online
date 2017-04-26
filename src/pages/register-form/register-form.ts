import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import {
  UserApi,
  UserForm
} from '../../api/user';

/**
 * @export
 * @class RegisterFormComponent
 */
@Component({
  selector: 'fountain-app',
  template: require('./register-form.html')
})
export class RegisterFormComponent {

  /**
   * @private
   * @type {UserForm}
   * @memberOf RegisterFormComponent
   */
  public userForm: UserForm = {
    name: '',
    email: '',
    password: '',
    location: '',
  };

  /**
   * Creates an instance of RegisterFormComponent.
   * @param {UserApi} userApi
   * @memberOf RegisterFormComponent
   */
  public constructor(private userApi: UserApi) { }

  /**
   * @memberOf RegisterFormComponent
   */
  private registerAccount(formData: NgForm): void {
    console.log(formData);
    // this.userApi.insert(formData.value as UserForm);
  }
}
