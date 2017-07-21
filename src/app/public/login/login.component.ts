import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    formErrors = {
        username: '',
        password: ''
    };

    validationMessages = {
        username: {
            required: 'Username is required.',
            minlength: 'Min length error'
        },
        password: {
            required: 'Password is required.'
        }
    };

    constructor(private router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.myForm = this.fb.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            password: ['', Validators.required],
        });
        this.myForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.myForm) {
            return;
        }
        const form = this.myForm;


        for (const field in this.formErrors) {
            if (field) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (key) {

                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    /**
     * Login action
     * @param form
     */
    onSubmit(form: any): void {
        if (this.myForm.valid) {
            if (form.username === 'nisam' && form.password === '123') {
                localStorage.setItem('currentUser', 'nisam');
                this.router.navigate(['/home']);
            } else {
                localStorage.removeItem('currentUser');
            }
        }

    }

}
