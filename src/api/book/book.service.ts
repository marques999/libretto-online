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
  public constructor( @Inject(Http) private api: Http) { }

  /**
   * @returns {Observable<any>}
   * @memberOf BookApi
   */
  public getAll(): Observable<Book[]> {
    return this.api.get('/api/book').map(r => r.json());
  }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   * @memberOf BookApi
   */
  public getById(bookId: string): Observable<Book> {
    return this.api.get('/api/book/:id'.replace(/:id/, bookId)).map(r => r.json());
  }
}
