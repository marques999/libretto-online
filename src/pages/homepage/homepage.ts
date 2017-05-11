import {
  OnInit,
  Component
} from '@angular/core';

import {
  Book,
  BookApi
} from '../../api/book';

import {
  Order,
  OrderForm,
  OrderApi
} from '../../api/order';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { ViewChild } from '@angular/core';

import { UserConstants } from '../../globals';

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

   @ViewChild('modal') modal: ModalComponent;

  /**
   * @private
   * @type {Book[]}
   * @memberOf HomepageComponent
   */
  private books: Book[] = [];

  private selectedBook : Book = {
      Title : '',
      Id: '',
      Stock: 0,
      Price: 0
  };

  private order : OrderForm = {
    bookId: '',
    quantity: 1,
    customerId: '',
    bookTitle : '',
    customerName : '',
    total: 0
  }

  private misc = {
    price : 0
  }

  /**
   * Creates an instance of HomepageComponent.
   * @param {BookApi} bookApi
   * @memberOf HomepageComponent
   */
  constructor(private bookApi: BookApi,
              private userConstants: UserConstants,
              private orderApi : OrderApi) { }

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
    this.bookApi.getAll().subscribe((books: any ) => {
      this.books = books.GetBooksListResult;
    });
  }

  openModal(selectedBook: Book) {
      this.selectedBook = selectedBook;
      this.order.bookId = selectedBook.Id;
      this.order.bookTitle = selectedBook.Title;
      this.misc.price = selectedBook.Price;
      this.order.customerName = this.userConstants.getUser().fullName;
      this.order.customerId = this.userConstants.getUser().id;
      this.modal.open();
  }

  submitOrder(): void {
    console.log(this.order);
    this.order.total = this.misc.price * this.order.quantity;
    this.orderApi.insert(this.order).subscribe(
      resp => this.modal.close(),
      error => console.log(error)
    );
  }
}
