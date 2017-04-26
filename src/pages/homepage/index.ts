import {
  RouterModule
} from '@angular/router';

import {
  HomepageComponent
} from './homepage';

export const HomepageRouting = RouterModule.forRoot([{
  path: 'books',
  pathMatch: 'full',
  component: HomepageComponent
}]);

export * from './homepage';
