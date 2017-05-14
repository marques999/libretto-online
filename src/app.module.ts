import {
  NgModule
} from '@angular/core';

import {
  HttpModule
} from '@angular/http';

import {
  FormsModule
} from '@angular/forms';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  ModalModule
} from 'ngx-bootstrap';

import {
  ToastModule
} from 'ng2-toastr/ng2-toastr';

import {
  LocalStorageModule
} from 'angular-2-local-storage';

import {
  Ng2Bs3ModalModule
} from 'ng2-bs3-modal/ng2-bs3-modal';

import {
  BookApi
} from './api/book';

import {
  UserApi
} from './api/user';

import {
  OrderApi
} from './api/order';

import {
  PurchaseApi
} from './api/purchase';

import {
  EqualValidator
} from './app.directive';

import {
  LibrettoComponent
} from './app.component';

import {
  Constants,
  UserConstants
} from './api/globals';

import {
  HomepageRouting,
  HomepageComponent
} from './pages/homepage';

import {
  TransactionsRouting,
  TransactionsComponent
} from './pages/transactions';

import {
  HeaderComponent
} from './components/header';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    HomepageRouting,
    Ng2Bs3ModalModule,
    TransactionsRouting,
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    BookApi,
    UserApi,
    OrderApi,
    Constants,
    PurchaseApi,
    UserConstants
  ],
  declarations: [
    EqualValidator,
    HeaderComponent,
    LibrettoComponent,
    HomepageComponent,
    TransactionsComponent
  ],
  bootstrap: [
    LibrettoComponent
  ]
})
export class LibrettoModule { }
