import {
  OnInit,
  Component
} from '@angular/core';

import {
  PurchaseApi,
  PurchaseForm
} from '../../api/purchase';

/**
 * @export
 * @class PurchaseFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'purchase-form',
  template: require('./purchase-form.html'),
})
export class PurchaseFormComponent {

  /**
   * @private
   * @type {Purchase}
   * @memberOf PurchaseFormComponent
   */
  private purchaseInformation: PurchaseForm;

  /**
   * Creates an instance of PurchaseFormComponent.
   * @param {PurchaseApi} purchaseApi
   * @memberOf PurchaseFormComponent
   */
  public constructor(private purchaseApi: PurchaseApi) { }

  /**
   * @private
   * @memberOf PurchaseFormComponent
   */
  private makePurchase(): void {
    this.purchaseApi.insert(this.purchaseInformation).subscribe((purchaseInformation) => {
      console.log('makePurchase()');
    });
  }
}
