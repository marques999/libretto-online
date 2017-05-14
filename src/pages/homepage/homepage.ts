import {
  OnInit,
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {
  ToastsManager
} from 'ng2-toastr/ng2-toastr';

import {
  ModalComponent
} from 'ng2-bs3-modal/ng2-bs3-modal';

import {
  Book,
  BookApi
} from '../../api/book';

import {
  Order,
  OrderApi,
  OrderForm
} from '../../api/order';

import {
  UserConstants
} from '../../api/globals';

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
   * @type {ModalComponent}
   * @memberof HomepageComponent
   */
  @ViewChild('orderModal') modal: ModalComponent;

  /**
   * @private
   * @type {Book[]}
   * @memberOf HomepageComponent
   */
  private books: Book[] = [];

  /**
   * @private
   * @type {Book}
   * @memberof HomepageComponent
   */
  private selectedBook: Book = {
    Title: '',
    Id: '',
    Stock: 0,
    Price: 0
  };

  /**
   * @private
   * @type {OrderForm}
   * @memberof HomepageComponent
   */
  private order: OrderForm = {
    bookId: '',
    quantity: 1,
    customerId: '',
    bookTitle: '',
    customerName: '',
    total: 0
  };

  /**
   * @private
   * @memberof HomepageComponent
   */
  private misc: any = {
    price: 0
  };

  /**
   * Creates an instance of HomepageComponent.
   * @param {BookApi} bookApi
   * @param {OrderApi} orderApi
   * @param {ToastsManager} toaster
   * @param {UserConstants} userConstants
   * @param {ViewContainerRef} viewContainer
   * @memberof HomepageComponent
   */
  public constructor(
    private bookApi: BookApi,
    private orderApi: OrderApi,
    private toaster: ToastsManager,
    private userConstants: UserConstants,
    private viewContainer: ViewContainerRef
  ) {
    this.toaster.setRootViewContainerRef(viewContainer);
  }

  /**
   * @memberOf TodoComponent
   */
  public ngOnInit(): void {
    this.refreshBooks();
  }

  /**
   * @param {Book} selectedBook
   * @memberof HomepageComponent
   */
  public openModal(selectedBook: Book): void {
    this.selectedBook = selectedBook;
    this.order.bookId = selectedBook.Id;
    this.order.bookTitle = selectedBook.Title;
    this.misc.price = selectedBook.Price;
    this.order.customerName = this.userConstants.getUser().fullName;
    this.order.customerId = this.userConstants.getUser().id;
    this.modal.open();
  }

  /**
   * @memberof HomepageComponent
   */
  public submitOrder(): void {
    this.toaster.info(JSON.stringify(this.order), 'submitOrder()::request');
    this.order.total = this.misc.price * this.order.quantity;
    this.orderApi.insert(this.order).subscribe((orderInformation: any) => {
      this.modal.close();
      this.toaster.info(JSON.stringify(orderInformation), 'submitOrder()::response');
    }, (ex: any) => {
      this.toaster.error(ex.message, ex.title);
    });
  }

  /**
   * @private
   * @memberOf HomepageComponent
   */
  private refreshBooks(): void {
    this.bookApi.getAll().subscribe((books: any) => {
      this.books = books.GetBooksListResult;
    }, (ex: any) => {
      this.toaster.error(ex.message, ex.title);
    });
  }
}
