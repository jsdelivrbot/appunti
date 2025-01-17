import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
import { AuthService } from '../shared/auth.service';

@Component({
    template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()">
            <div class="input-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password">
            </div>
            <button type="submit" [disabled]="!myForm.valid">Sign In</button>
        </form>
    `
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    onSignin() {
        this.authService.signinUser(this.myForm.value);
    }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
