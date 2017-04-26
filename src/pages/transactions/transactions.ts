import {
  OnInit,
  Component
} from '@angular/core';

import {
  Order,
  OrderApi
} from '../../api/order/';

import {
  Purchase,
  PurchaseApi
} from '../../api/purchase';

/**
 * @export
 * @class TransactionsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'transactions',
  template: require('./transactions.html'),
})
export class TransactionsComponent implements OnInit {

  /**
   * @private
   * @type {Order[]}
   * @memberOf TransactionsComponent
   */
  private orders: Order[];

  /**
   * @private
   * @type {Purchase[]}
   * @memberOf TransactionsComponent
   */
  private purchases: Purchase[];

  /**
   * Creates an instance of TransactionsComponent.
   * @param {OrderApi} orderApi
   * @param {PurchaseApi} purchaseApi
   * @memberOf TransactionsComponent
   */
  public constructor(private orderApi: OrderApi, private purchaseApi: PurchaseApi) { }

  /**
   * @memberOf TodoComponent
   */
  public ngOnInit(): void {
    this.refreshOrders();
    this.refreshPurchases();
  }

  /**
   * @private
   * @memberOf TransactionsComponent
   */
  private refreshOrders(): void {
    this.orderApi.getAll().subscribe(orders => {
      this.orders = orders;
    });
  }

  /**
   * @private
   * @memberOf TransactionsComponent
   */
  private refreshPurchases(): void {
    this.purchaseApi.getAll().subscribe(purchases => {
      this.purchases = purchases;
    });
  }
}
