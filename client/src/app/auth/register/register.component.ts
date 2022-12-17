import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, CreateUserDto } from '../auth.service';
import { passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^.+@.+\..+$/),
    ]),
    passwords: new FormGroup({
      password: this.passwordControl,
      rePassword: new FormControl('', [passwordMatch(this.passwordControl)]),
    }),
    tel: new FormControl(''),
  });

  constructor(private router: Router,private formBuilder: FormBuilder,private authService: AuthService) {}

  ngOnInit(): void {}

  handleRegister(): void {
    const { email, passwords, tel } = this.registerFormGroup.value;
    const body: CreateUserDto = {
      email: email,
      password: passwords.password,
      tel: tel
    };
    console.log(tel)
    this.authService.register$(body).subscribe({
      next: (data) => {
        localStorage.setItem('currentUser', JSON.stringify({ data }) ),
        this.router.navigate(['/'])
      }
    });
  }

}
