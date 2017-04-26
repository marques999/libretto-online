import {
  RouterModule
} from '@angular/router';

import {
  RegisterFormComponent
} from './register-form';

export const RegisterFormRouting = RouterModule.forRoot([{
  path: 'register',
  pathMatch: 'full',
  component: RegisterFormComponent
}]);

export * from './register-form';
