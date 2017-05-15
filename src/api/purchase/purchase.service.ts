import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Http,
  Headers
} from '@angular/http';

import {
  Observable
} from 'rxjs/Observable';

import {
  Purchase,
  PurchaseForm,
  PurchaseId
} from './purchase.model';

import {
  Constants
} from '../globals';

import {
  OrderForm
} from '../order';

import 'rxjs/add/operator/map';

/**
 * @export
 * @class PurchaseApi
 */
@Injectable()
export class PurchaseApi {

  /**
   * @private
   * @static
   * @type {string}
   * @memberOf PurchaseApi
   */

  /**
   * Creates an instance of PurchaseApi.
   * @param {Http} api
   * @memberOf PurchaseApi
   */
  public constructor( @Inject(Http) private api: Http, private CONSTANTS : Constants) { }

  /**
   * @returns {Observable<any>}
   * @memberOf PurchaseApi
   */
  public getAll(): Observable<Purchase[]> {
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'purchases').map(r => r.json());
  }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf PurchaseApi
   */
  /*public getById(purchaseId: string): Observable<Purchase> {
    return this.api.get(PurchaseApi.ENDPOINT.replace(/:id/, purchaseId)).map(r => r.json());
  }*/

  public getPurchasesByUser(userId : string): Observable<Purchase[]>{
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'purchase/user/' + userId).map(r => r.json());
  }

  /**
   * @param {string} message
   * @returns {Observable<any>}
   * @memberOf PurchaseApi
   */
  public insert(purchaseInformation: OrderForm): Observable<Purchase> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'purchases/add', JSON.stringify(purchaseInformation), {
      headers
    }).map(r => r.json());
  }

  public remove(orderId: PurchaseId): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'purchases/delete', JSON.stringify(orderId), {headers}).map(r => r.json());
  }
}
