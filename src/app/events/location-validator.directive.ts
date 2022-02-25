import { Directive } from "@angular/core";
import { FormGroup, Validator, NG_VALIDATORS } from "@angular/forms";


@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {
    validate(control: FormGroup): {[key: string]: boolean}| null {
        let addressControl = control.controls['address']
        let cityControl = control.controls['city']
        let countryControl = control.controls['country']
        let onlineControl = (<FormGroup>control.root).controls['Online']

        if ((addressControl && addressControl.value && cityControl && 
            cityControl.value && countryControl && countryControl.value) 
        || (onlineControl && onlineControl.value)){
            return null
        } else {
            return {validateLocation: false}
        }
    }
    
}