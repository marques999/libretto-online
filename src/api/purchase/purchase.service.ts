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
  PurchaseForm
} from './purchase.model';

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
  private static ENDPOINT: string = '/api/purchase/:id';

  /**
   * Creates an instance of PurchaseApi.
   * @param {Http} api
   * @memberOf PurchaseApi
   */
  public constructor( @Inject(Http) private api: Http) { }

  /**
   * @returns {Observable<any>}
   * @memberOf PurchaseApi
   */
  public getAll(): Observable<Purchase[]> {
    return this.api.get(PurchaseApi.ENDPOINT.replace(/:id/, '')).map(r => r.json());
  }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf PurchaseApi
   */
  public getById(purchaseId: string): Observable<Purchase> {
    return this.api.get(PurchaseApi.ENDPOINT.replace(/:id/, purchaseId)).map(r => r.json());
  }

  /**
   * @param {string} message
   * @returns {Observable<any>}
   * @memberOf PurchaseApi
   */
  public insert(purchaseInformation: PurchaseForm): Observable<Purchase> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(PurchaseApi.ENDPOINT.replace(/:id/, ''), JSON.stringify(purchaseInformation), {
      headers
    }).map(r => r.json());
  }
}
