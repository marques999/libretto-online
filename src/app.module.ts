import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { BookApi } from './api/book';
import { UserApi } from './api/user/';
import { OrderApi } from './api/order/';
import { PurchaseApi } from './api/purchase/';
import { EqualValidator } from './app.directive';
import { LibrettoComponent } from './app.component';

import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { LocalStorageModule } from 'angular-2-local-storage';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import {
  Constants,
  UserConstants
} from './api/globals';

import {
  HomepageRouting,
  HomepageComponent
} from './pages/homepage';

import {
  LoginFormRouting,
  LoginFormComponent
} from './pages/login-form';

import {
  RegisterFormRouting,
  RegisterFormComponent
} from './pages/register-form';

import {
  TransactionsRouting,
  TransactionsComponent
} from './pages/transactions';

import {
  StatusFormatPipe
} from './pipes';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    HomepageRouting,
    LoginFormRouting,
    RegisterFormRouting,
    TransactionsRouting,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    Ng2Bs3ModalModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    BookApi,
    UserApi,
    OrderApi,
    PurchaseApi,
    Constants,
    UserConstants
  ],
  declarations: [
    EqualValidator,
    HeaderComponent,
    FooterComponent,
    LibrettoComponent,
    RegisterFormComponent,
    HomepageComponent,
    LoginFormComponent,
    TransactionsComponent,
    StatusFormatPipe
  ],
  bootstrap: [
    LibrettoComponent
  ]
})
export class LibrettoModule { }
