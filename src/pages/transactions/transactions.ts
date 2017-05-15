import {
  OnInit,
  Component,
  ViewContainerRef
} from '@angular/core';

import {
  ToastsManager
} from 'ng2-toastr/ng2-toastr';

import {
  Order,
  OrderId,
  OrderApi
} from '../../api/order';

import {
  UserConstants,
  Constants
} from '../../api/globals';

import {
  Purchase,
  PurchaseApi,
  PurchaseId
} from '../../api/purchase/';

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

  private purchases: Purchase[];

  /**
   * Creates an instance of TransactionsComponent.
   * @param {OrderApi} orderApi
   * @param {ToastsManager} toaster
   * @param {UserConstants} userInfo
   * @param {ViewContainerRef} viewContainer
   * @memberof TransactionsComponent
   */
  public constructor(private orderApi: OrderApi, 
                    private userInfo: UserConstants,
                    private constants : Constants,
                    private purchaseApi: PurchaseApi,
                    private toaster: ToastsManager,
                    private viewContainer: ViewContainerRef) { 
                      this.toaster.setRootViewContainerRef(viewContainer);
                    }

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
    this.orderApi.getOrdersByUser(this.userInfo.getUser().id).subscribe((orders: any) => {
      this.orders = orders;
      this.toaster.info(orders, 'refreshOrders()');
      this.orders.map((orderInformation: any) => {
        let epochDate = orderInformation.Timestamp.split('+')[0].substring(6);
        let epochStatusDate = orderInformation.StatusTimestamp.split('+')[0].substring(6);
        let date = new Date(parseInt(epochDate, 10));
        let statusDate = new Date(parseInt(epochStatusDate, 10));
        orderInformation.Timestamp = date.toISOString();
        orderInformation.StatusTimestamp = statusDate.toISOString();
      });
    }, (ex: any) => {
      this.toaster.error(ex.mesage, ex.title);
    });
  }

  private refreshPurchases(): void {
    this.purchaseApi.getPurchasesByUser(this.userInfo.getUser().id).subscribe((purchases: any) => {
      this.purchases = purchases;
      this.purchases.map(purchaseInformation => {
        let epochDate = purchaseInformation.Timestamp.split('+')[0].substring(6);
        let date = new Date(parseInt(epochDate, 10));
        purchaseInformation.Timestamp = date.toISOString();
      });
    }, errorInformation => console.log(errorInformation));
  }

  /**
   * @private
   * @param {Order} order
   * @memberof TransactionsComponent
   */
  private cancelOrder(order: Order): void {
    let arg: OrderId = {
      Id: order.Id
    };
    this.toaster.info(JSON.stringify(arg), 'cancelOrder()::request');
    this.orderApi.remove(arg).subscribe((orderInformation: any) => {
      this.orders = orderInformation;
      this.toaster.info(orderInformation, 'cancelOrder()::response');
      this.orders.map(elem => {
        let epochDate = elem.Timestamp.split('+')[0].substring(6);
        let epochStatusDate = elem.StatusTimestamp.split('+')[0].substring(6);
        let date = new Date(parseInt(epochDate, 10));
        let statusDate = new Date(parseInt(epochStatusDate, 10));
        elem.Timestamp = date.toISOString();
        elem.StatusTimestamp = statusDate.toISOString();
      });
    }, (ex: any) => {
      this.toaster.error(ex.mesage, ex.title);
    });
  }

  private cancelPurchase(purchase : Purchase): void{
    let arg: PurchaseId = {
      Id: purchase.Id
    };
    this.purchaseApi.remove(arg).subscribe(
      purchaseInformation => {
        this.purchases = purchaseInformation;
        console.log(this.purchases);
        this.purchases.map(elem => {
          console.log(elem);
          let epochDate = elem.Timestamp.split('+')[0].substring(6);
          let date = new Date(parseInt(epochDate, 10));
          elem.Timestamp = date.toISOString();
        });
      },
      errorInformation => console.log(errorInformation)
    );

  }

  private formatStatus(index : number): string{
    return this.constants.getStatus(index - 1);
  }
}
