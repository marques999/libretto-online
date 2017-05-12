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
  OrderForm,
  OrderId
} from './order.model';

import {
  Constants
} from '../globals';

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
  public constructor( @Inject(Http) private api: Http, private CONSTANTS: Constants) { }

  /**
   * @returns {Observable<Order[]>}
   * @memberof OrderApi
   */
  public getAll(): Observable<Order[]> {
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'orders').map(r => r.json());
  }

  /**
   * @param {string} id
   * @returns {Observable<Order[]>}
   * @memberof OrderApi
   */
  public getOrdersByUser(id: string): Observable<Order[]> {
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'order/user/' + id).map(r => r.json());
  }

  /**
   * @param {string} orderId
   * @returns {Observable<Order>}
   * @memberof OrderApi
   */
  public getById(orderId: string): Observable<Order> {
    return this.api.get(OrderApi.ENDPOINT.replace(/:id/, orderId)).map(r => r.json());
  }

  /**
   * @param {OrderForm} orderInformation
   * @returns {Observable<Order>}
   * @memberof OrderApi
   */
  public insert(orderInformation: OrderForm): Observable<Order> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'orders/add', JSON.stringify(orderInformation), {
      headers
    }).map(r => r.json());
  }

  /**
   * @param {OrderId} orderId
   * @returns {Observable<any>}
   * @memberof OrderApi
   */
  public remove(orderId: OrderId): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'orders/delete', JSON.stringify(orderId), {headers}).map(r => r.json());
  }
}
