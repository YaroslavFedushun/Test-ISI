import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.services';

@Component({
    selector: 'app-add-edit-form',
    templateUrl: './add-edit-form.component.html',
    styleUrls: ['./add-edit-form.component.css']
})

export class AddEditFormComponent implements OnInit {
    isAddMode: boolean = true;
    user: User | undefined = undefined;
    form: FormGroup;
    id: string = '';
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private route: ActivatedRoute
    ) {
     

        this.form = this.formBuilder.group({
            username: ['', {
                validators:[Validators.required],
            }],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            user_type: ['', Validators.required],
            password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
            confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
        });;

        this.form.controls['confirmPassword'].addValidators(
            this.createCompareValidator(
                this.form.controls['password'],
                this.form.controls['confirmPassword']
            )
           );
    }

    ngOnInit() {
        this.route.params.subscribe(param => {
            this.id = param['id'];
          if (this.id) {
            this.setUserValue();
          }

        })
        
        this.isAddMode = !this.id;

        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }
     
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }


    
    setUserValue () {
        this.user = this.userService.getUserByUserName(this.id)
        if (this.user) {
            this.form.patchValue(this.user);
        } else {
            alert('error')
        }
    }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        console.log('wors');
        console.log(this.form.invalid);
        

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createUser();
        } else {
            this.updateUser();
        }
    }

    createCompareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
        return () => {
        if (controlOne.value !== controlTwo.value)
          return { match_error: 'Value does not match' };
        return null;
      };
    
    }

    private createUser() {
        this.userService.create(this.form.value);

    }

    private updateUser() {
        this.userService.update(this.form.value, this.id)
    }

    public deleteUser() {
        this.userService.delete(this.id)
    }
}
