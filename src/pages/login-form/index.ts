import {
  RouterModule
} from '@angular/router';

import {
  LoginFormComponent
} from './login-form';

export const LoginFormRouting = RouterModule.forRoot([{
  path: 'login',
  pathMatch: 'full',
  component: LoginFormComponent
}]);

export * from './login-form';
