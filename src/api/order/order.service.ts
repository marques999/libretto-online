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

import 'rxjs/add/operator/map';

import { Constants } from '../../globals';

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
  public constructor( @Inject(Http) private api: Http, private CONSTANTS : Constants) { }

  /**
   * @returns {Observable<any>}
   * @memberOf OrderApi
   */
  public getAll(): Observable<Order[]> {
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'orders').map(r => r.json());
  }

  public getOrdersByUser(id : string): Observable<Order[]>{
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'order/user/' + id).map(r => r.json());
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
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'orders/add', JSON.stringify(orderInformation), {
      headers
    }).map(r => r.json());
  }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf OrderApi
   */
  public remove(order: OrderId): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'orders/delete', JSON.stringify(order), {headers}).map(r => r.json());
  }
}
