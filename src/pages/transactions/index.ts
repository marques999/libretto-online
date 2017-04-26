import {
  RouterModule
} from '@angular/router';

import {
  TransactionsComponent
} from './transactions';

export const TransactionsRouting = RouterModule.forRoot([{
  path: 'transactions',
  pathMatch: 'full',
  component: TransactionsComponent
}]);

export * from './transactions';
