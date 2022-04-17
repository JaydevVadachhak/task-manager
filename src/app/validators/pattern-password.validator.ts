import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function patternPasswordValidator(password: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const patternPasswordForbidden = password.test(control.value);
    return patternPasswordForbidden
      ? null
      : { patternPasswordForbidden: { value: control.value } };
  };
}
