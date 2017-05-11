import {
  OnInit,
  Component
} from '@angular/core';

import {
  Order,
  OrderApi,
  OrderId
} from '../../api/order/';

import { UserConstants } from '../../globals';

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
   * Creates an instance of TransactionsComponent.
   * @param {OrderApi} orderApi
   * @param {PurchaseApi} purchaseApi
   * @memberOf TransactionsComponent
   */
  public constructor(private orderApi: OrderApi, private userInfo : UserConstants) { }

  /**
   * @memberOf TodoComponent
   */
  public ngOnInit(): void {
    this.refreshOrders();
  }

  /**
   * @private
   * @memberOf TransactionsComponent
   */
  private refreshOrders(): void {
    this.orderApi.getOrdersByUser(this.userInfo.getUser().id).subscribe( (orders : any) => {
      this.orders = orders;

      this.orders.map(elem => {
        let epochDate = elem.Timestamp.split('+')[0].substring(6);
        let epochStatusDate = elem.StatusTimestamp.split('+')[0].substring(6);

        let date = new Date(parseInt(epochDate));
        let statusDate = new Date(parseInt(epochStatusDate));

        elem.Timestamp = date.toISOString();

        elem.StatusTimestamp = statusDate.toISOString();
      });
    }, error => console.log(error));
  }


  private cancelOrder(order: Order): void{

    let arg : OrderId = {
      Id : order.Id
    }
    this.orderApi.remove(arg).subscribe(
      resp => {
        this.orders = resp;

        this.orders.map(elem => {
          let epochDate = elem.Timestamp.split('+')[0].substring(6);
          let epochStatusDate = elem.StatusTimestamp.split('+')[0].substring(6);

          let date = new Date(parseInt(epochDate));
          let statusDate = new Date(parseInt(epochStatusDate));

          elem.Timestamp = date.toISOString();

          elem.StatusTimestamp = statusDate.toISOString();
        });
      },
      error => console.log(error)
    )
  }
}
