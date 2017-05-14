import {
  Component,
  ViewContainerRef
} from '@angular/core';

import {
  ToastsManager
} from 'ng2-toastr/ng2-toastr';

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
  private purchaseForm: PurchaseForm;

  /**
   * Creates an instance of PurchaseFormComponent.
   * @param {ToastsManager} toaster
   * @param {PurchaseApi} purchaseApi
   * @param {ViewContainerRef} viewContainer
   * @memberof PurchaseFormComponent
   */
  public constructor(
    private toaster: ToastsManager,
    private purchaseApi: PurchaseApi,
    private viewContainer: ViewContainerRef
  ) {
    this.toaster.setRootViewContainerRef(viewContainer);
  }

  /**
   * @private
   * @memberOf PurchaseFormComponent
   */
  private makePurchase(): void {
    this.toaster.info(JSON.stringify(this.purchaseForm), 'makePurchase()::request');
    this.purchaseApi.insert(this.purchaseForm).subscribe((purchaseInformation: any) => {
      this.toaster.info(JSON.stringify(purchaseInformation), 'makePurchase()::response');
    }, (ex: any) => {
      this.toaster.error(ex.mesage, ex.title);
    });
  }
}
