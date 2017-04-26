import {
  OnInit,
  Component
} from '@angular/core';

import {
  Book,
  BookApi
} from '../../api/book';

/**
 * @export
 * @class HomepageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'homepage',
  template: require('./homepage.html'),
})
export class HomepageComponent implements OnInit {

  /**
   * @private
   * @type {Book[]}
   * @memberOf HomepageComponent
   */
  private books: Book[] = [{
    id: '1',
    stock: 3,
    price: 24.99,
    title: 'First Product'
  }, {
    id: '2',
    stock: 3,
    price: 64.99,
    title: 'Second Product'
  }, {
    id: '3',
    stock: 3,
    price: 74.99,
    title: 'Third Product'
  }, {
    id: '4',
    stock: 3,
    price: 84.99,
    title: 'Fourth Product'
  }, {
    id: '5',
    stock: 3,
    price: 94.99,
    title: 'Fifth Product'
  }, {
    id: '6',
    stock: 3,
    price: 54.99,
    title: 'Sixth Product'
  }];

  /**
   * Creates an instance of HomepageComponent.
   * @param {BookApi} bookApi
   * @memberOf HomepageComponent
   */
  constructor(private bookApi: BookApi) { }

  /**
   * @memberOf TodoComponent
   */
  public ngOnInit(): void {
    this.refreshBooks();
  }

  /**
   * @private
   * @memberOf HomepageComponent
   */
  private refreshBooks(): void {
    this.bookApi.getAll().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}
