import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import { passwordMatch } from '../../auth/util/util';
import { setSession } from '../util/api';

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
    if(this.registerFormGroup.invalid) {return;}
    const { email, passwords:{password, rePassword}, tel } = this.registerFormGroup.value;
    
    this.authService.register$(email, password, tel).subscribe({
      next: (data) => {
        setSession(data);
        // localStorage.setItem('currentUser', JSON.stringify({ data }) ),
        this.router.navigate(['/'])
      }
    });
  }

}
