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
  OrderId,
  OrderForm
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
  public constructor(@Inject(Http) private api: Http, private CONSTANTS: Constants) { }

  /**
   * @returns {Observable<Order[]>}
   * @memberof OrderApi
   */
  public getAll(): Observable<Order[]> {
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'orders').map(r => r.json()).catch(this.handleError);
  }

  /**
   * @param {string} id
   * @returns {Observable<Order[]>}
   * @memberof OrderApi
   */
  public getOrdersByUser(id: string): Observable<Order[]> {
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'order/user/' + id).map(r => r.json()).catch(this.handleError);
  }

  /**
   * @param {string} orderId
   * @returns {Observable<Order>}
   * @memberof OrderApi
   */
  public getById(orderId: string): Observable<Order> {
    return this.api.get(OrderApi.ENDPOINT.replace(/:id/, orderId)).map(r => r.json()).catch(this.handleError);
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
    }).map(r => r.json()).catch(this.handleError);
  }

  /**
   * @param {OrderId} orderId
   * @returns {Observable<any>}
   * @memberof OrderApi
   */
  public remove(orderId: OrderId): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post(this.CONSTANTS.getAPIEndpoint() + 'orders/delete', JSON.stringify(orderId), {
      headers
    }).map(r => r.json()).catch(this.handleError);
  }

  /**
   * @private
   * @param {(Response | any)} ex
   * @returns {Observable<any>}
   * @memberof UserApi
   */
  private handleError(ex: Response | any): Observable<any> {
    if (ex instanceof Response) {
      return Observable.fromPromise(ex.json()).flatMap(responseBody => {
        return Observable.throw({
          message: responseBody.error || JSON.stringify(responseBody),
          title: ex.status && ex.statusText ? `[${ex.status}] ${ex.statusText}` : 'order.service.ts'
        });
      });
    }
    return Observable.throw({
      title: 'order.service.ts',
      message: ex.message ? ex.message : ex.toString()
    });
  };
}
