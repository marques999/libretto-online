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
  Book
} from './book.model';

import {
  Constants
} from '../globals';

import 'rxjs/add/operator/map';

/**
 * @export
 * @class BookApi
 */
@Injectable()
export class BookApi {

  /**
   * Creates an instance of BookApi.
   * @param {Http} api
   * @memberOf BookApi
   */
  public constructor(@Inject(Http) private api: Http, private CONSTANTS: Constants) { }

  /**
   * @returns {Observable<any>}
   * @memberOf BookApi
   */
  public getAll(): Observable<Book[]> {
    return this.api.get(this.CONSTANTS.getAPIEndpoint() + 'books').map(r => r.json()).catch(this.handleError);
  }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf BookApi
   */
  public getById(bookId: string): Observable<Book> {
    return this.api.get('/api/book/:id'.replace(/:id/, bookId)).map(r => r.json()).catch(this.handleError);
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
          title: ex.status && ex.statusText ? `[${ex.status}] ${ex.statusText}` : 'book.service.ts'
        });
      });
    }
    return Observable.throw({
      title: 'book.service.ts',
      message: ex.message ? ex.message : ex.toString()
    });
  };
}
