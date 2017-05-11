import { Component } from '@angular/core';

import { UserConstants } from '../../globals';

import { User } from '../../api/user/';

import { LocalStorageService } from '../../../node_modules/angular-2-local-storage';

@Component({
  selector: 'fountain-header',
  template: require('./header.html')
})
export class HeaderComponent { 

  constructor( private userConstants : UserConstants, private localStorage : LocalStorageService) {
  }

  doLogout(): void {
    this.userConstants.logout();
  }

}
