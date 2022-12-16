import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required,Validators.minLength(8), Validators.pattern(/^.+@.+\..+$/)]),
    tel: new FormControl(''),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rePassword: new FormControl(),
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  handleRegister(): void {
    console.log(this.registerFormGroup)
  }

}
