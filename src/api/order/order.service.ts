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
  Order,
  OrderForm
} from './order.model';

import 'rxjs/add/operator/map';

/**
 * @export
 * @class OrderApi
 */
@Injectable()
export class OrderApi {

  /**
   * @private
   * @static
   * @type {string}
   * @memberOf OrderApi
   */
  private static ENDPOINT: string = '/api/order/:id';

  /**
   * Creates an instance of OrderApi.
   * @param {Http} api
   * @memberOf OrderApi
   */
  public constructor( @Inject(Http) private api: Http) { }

  /**
   * @returns {Observable<any>}
   * @memberOf OrderApi
   */
  public getAll(): Observable<Order[]> {
    return this.api.get(OrderApi.ENDPOINT.replace(/:id/, '')).map(r => r.json());
  }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf OrderApi
   */
  public getById(orderId: string): Observable<Order> {
    return this.api.get(OrderApi.ENDPOINT.replace(/:id/, orderId)).map(r => r.json());
  }

  /**
   * @param {string} message
   * @returns {Observable<any>}
   * @memberOf OrderApi
   */
  public insert(orderInformation: OrderForm): Observable<Order> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(OrderApi.ENDPOINT.replace(/:id/, ''), JSON.stringify(orderInformation), {
      headers
    }).map(r => r.json());
  }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf OrderApi
   */
  public remove(productId: string): Observable<any> {
    return this.api.delete(OrderApi.ENDPOINT.replace(/:id/, productId));
  }
}
