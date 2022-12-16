import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, ]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)])
  }) 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    // this.authService.user  = {
    //   email: 'john@gmail.com',
    //   userName: 'John',
    // } as any;
    // this.router.navigate(['/']);
  }
  loginHandler(): void{ 
    console.log('form is submitted', this.loginFormGroup);
  }
  handleLogin(): void {
    console.log('form must be submitted');
  }
}
