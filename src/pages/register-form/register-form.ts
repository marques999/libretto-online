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
    Name: '',
    Email: '',
    Password: '',
    Location: '',
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
    console.log(this.userForm);
    delete this.userForm.Password;
    this.userApi.register(this.userForm).subscribe(
      resp => console.log(resp),
      error => console.log(error)
    );
  }
}
