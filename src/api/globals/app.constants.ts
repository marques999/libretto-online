import {
  Injectable
} from '@angular/core';

/**
 * @export
 * @class Constants
 */
@Injectable()
export class Constants {

  /**
   * @private
   * @memberof Constants
   */
  private _endpoint: string = 'http://localhost:8733/Design_Time_Addresses/LibrettoWebstore/ServicesProvider.svc/';

  private _status: string[] = ['Processing', 'Dispatched', 'Waiting'];

  /**
   * @returns {string}
   * @memberof Constants
   */
  public getAPIEndpoint(): string {
    return this._endpoint;
  }

  public getStatus(index : number): string{
    return this._status[index];
  }
}
