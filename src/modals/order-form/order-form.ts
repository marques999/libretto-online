import {
  Component
} from '@angular/core';

import {
  OrderApi,
  OrderForm
} from '../../api/order';

/**
 * @export
 * @class OrderFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'order-form',
  template: require('./order-form.html'),
})
export class OrderFormComponent {

  /**
   * @private
   * @type {Book}
   * @memberOf OrderFormComponent
   */
  private orderForm: OrderForm;

  /**
   * Creates an instance of OrderFormComponent.
   * @param {OrderApi} orderApi
   * @memberOf OrderFormComponent
   */
  public constructor(private orderApi: OrderApi) { }

  /**
   * @private
   * @memberOf OrderFormComponent
   */
  private placeOrder(): void {
    this.orderApi.insert(this.orderForm).subscribe((m) => {
      console.log('placeOrder()');
    });
  }
}
