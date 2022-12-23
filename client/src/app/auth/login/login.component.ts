import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { setSession } from '../util/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^.+@.+\..+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  error = null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  handleLogin(): void {
    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: (userData) => {
        
        setSession(userData);

        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error.message;
      },
    });
  }
}
