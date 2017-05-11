import { Injectable } from '@angular/core';

import {User, UserApi} from './api/user/index';

import { LocalStorageService } from '../node_modules/angular-2-local-storage';

@Injectable()
export class UserConstants {

  public constructor(public localStorage : LocalStorageService) { 
      this.user = this.localStorage.get<User>("user");

      if(this.user.id != undefined)
        this.userLoggedIn = true;
   }

  private user : User = {
    email: '',
    location: '',
    fullName: '',
    id : ''
  }

  public userLoggedIn : boolean = false;

  public getUser(): User{
      return this.user;
  }

  public logout(): void {
      this.user = {
            email: '',
            location: '',
            fullName: '',
            id : ''
        }

    this.userLoggedIn = false;

    this.localStorage.set("user", {email: '',location: '',fullName: '',id : ''});
  }


  public setUser(email: string, location: string, name:  string, id: string): void{
      this.user.email = email;
      this.user.location = location;
      this.user.fullName = name;
      this.user.id = id;

      this.localStorage.set("user", this.user);
  }
}

@Injectable()
export class Constants {

    public constructor() { }

    private _APIEndpoint = 'http://localhost:8733/Design_Time_Addresses/WCFServices/ServicesProvider.svc/';

    public getAPIEndpoint(): string {
        return this._APIEndpoint;
    }
}
