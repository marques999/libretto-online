import {
  Attribute,
  Directive,
  forwardRef
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

/**
 * @export
 * @class EqualValidator
 * @implements {Validator}
 */
@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [{
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
  }]
})
export class EqualValidator implements Validator {

  /**
   * Creates an instance of EqualValidator.
   * @param {string} validateEqual
   * @param {string} reverse
   * @memberOf EqualValidator
   */
  public constructor(
    @Attribute('validateEqual') public validateEqual: string,
    @Attribute('reverse') public reverse: string) { }

  /**
   * @param {AbstractControl} c
   * @returns {{ [key: string]: any }}
   * @memberOf EqualValidator
   */
  public validate(c: AbstractControl): { [key: string]: any } {

    let selfValue = c.value;
    let controlValue = c.root.get(this.validateEqual);

    if (controlValue && selfValue !== controlValue.value && !this.isReverse) {
      return { validateEqual: false };
    }

    if (controlValue && selfValue === controlValue.value && this.isReverse) {

      delete controlValue.errors.validateEqual;

      if (Object.keys(controlValue.errors).length === 0) {
        controlValue.setErrors(null);
      }
    }

    if (controlValue && selfValue !== controlValue.value && this.isReverse) {
      controlValue.setErrors({ validateEqual: false });
    }

    return null;
  }

  /**
   * @private
   * @returns {boolean}
   * @memberOf EqualValidator
   */
  private isReverse(): boolean {
    return (this.reverse && this.reverse === 'true') ? true : false;
  }
}
