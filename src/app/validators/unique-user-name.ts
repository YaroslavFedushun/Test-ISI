import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.services';
// this class needs to use the dependency injection to reach the http client to make an api request
// we can only access to http client with dependecny injection system
// now we need to decorate this class with Injectable to access to AuthService
@Injectable({
  providedIn: 'root',
})
export class UniqueUserName implements AsyncValidator {
  constructor(private userServices: UserService,) {}
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const { value } = control;
        if(this.userServices.userNameAvailable(value)){
            
        }
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
  //this will be used by the usernamae FormControl
  //we use arrow function cause this function will be called by a 
  //different context, but we want it to have this class' context 
  //because this method needs to reach `this.authService`. in other context `this.authService` will be undefined.
  // if this validator would be used by the FormGroup, you could use 
  //if you are not sure you can  use type "control: AbstractControl"
  //In this case you use it for a FormControl
  
    }
