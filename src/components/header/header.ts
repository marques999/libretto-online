import {
  Component, ViewContainerRef, ViewChild
} from '@angular/core';

import {
  NgForm
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import {
  LocalStorageService
} from 'angular-2-local-storage';

import {
  ToastsManager
} from 'ng2-toastr/ng2-toastr';

import {
  ModalComponent
} from 'ng2-bs3-modal/ng2-bs3-modal';

import {
  User,
  UserApi,
  UserForm,
  LoginForm
} from '../../api/user';

import {
  UserConstants
} from '../../api/globals';

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
   * @type {ModalComponent}
   * @memberof HeaderComponent
   */
  @ViewChild('loginModal') loginModal: ModalComponent;

  /**
   * @type {ModalComponent}
   * @memberof HeaderComponent
   */
  @ViewChild('registerModal') registerModal: ModalComponent;

  /**
   * @private
   * @type {LoginForm}
   * @memberof HeaderComponent
   */
  private loginData: LoginForm;

  /**
   * @private
   * @type {UserForm}
   * @memberof HeaderComponent
   */
  private registerData: UserForm;

  /**
   * Creates an instance of HeaderComponent.
   * @param {Router} router
   * @param {UserApi} userApi
   * @param {ToastsManager} toaster
   * @param {UserConstants} userConstants
   * @param {ViewContainerRef} viewContainer
   * @param {LocalStorageService} localStorage
   * @memberof HeaderComponent
   */
  public constructor(
    private router: Router,
    private userApi: UserApi,
    private toaster: ToastsManager,
    private userConstants: UserConstants,
    private viewContainer: ViewContainerRef,
    private localStorage: LocalStorageService
  ) {
    this.resetLogin();
    this.resetRegister();
    this.toaster.setRootViewContainerRef(viewContainer);
  }

  /**
   * @memberof HeaderComponent
   */
  public doLogin(): void {
    this.toaster.info(JSON.stringify(this.loginData), '[Request] doLogin()');
    this.userApi.authenticate(this.loginData).subscribe((userInformation: any) => {
      this.loginModal.dismiss();
      this.toaster.info(JSON.stringify(userInformation), '[Response] doLogin()');
      this.userConstants.setUser(userInformation.Email, userInformation.Location, userInformation.Name, userInformation.Id);
      this.userConstants.loggedIn = true;
      this.router.navigate(['/books']);
    }, (ex: any) => {
      this.resetLogin();
      this.toaster.error(ex.message, ex.title);
    });
  }

  /**
   * @memberOf HeaderComponent
   */
  public doRegister(): void {
    this.toaster.info(JSON.stringify(this.registerData), '[Request] doRegister()');
    this.userApi.register(this.registerData).subscribe((userInformation: any) => {
      this.resetRegister();
      this.registerModal.dismiss();
      this.toaster.success(userInformation, '[Response] doRegister()');
    }, (ex: any) => {
      this.registerData.Password = '';
      this.toaster.error(ex.mesage, ex.title);
    });
  }

  /**
   * @memberof HeaderComponent
   */
  public doLogout(): void {
    this.userConstants.logout();
  }

  /**
   * @private
   * @memberof HeaderComponent
   */
  private resetRegister(): void {
    this.registerData = {
      Name: '',
      Email: '',
      Password: '',
      Location: '',
    };
  }

  /**
   * @private
   * @memberof HeaderComponent
   */
  private resetLogin(): void {
    this.loginData = {
      Email: '',
      Password: ''
    };
  }
}
