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
 * @class BookViewComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'book-view',
  template: require('./book-view.html'),
})
export class BookViewComponent implements OnInit {

  /**
   * @private
   * @type {Book}
   * @memberOf BookViewComponent
   */
  private bookInformation: Book;

  /**
   * Creates an instance of BookViewComponent.
   * @param {string} bookId
   * @param {BookApi} bookApi
   * @memberOf BookViewComponent
   */
  public constructor(private bookId: string, private bookApi: BookApi) { }

  /**
   * @memberOf BookViewComponent
   */
  public ngOnInit(): void {
    this.refreshBook();
  }

  /**
   * @private
   * @memberOf BookViewComponent
   */
  private refreshBook(): void {
    this.bookApi.getById(this.bookId).subscribe(bookInformation => {
      this.bookInformation = bookInformation;
    });
  }
}
