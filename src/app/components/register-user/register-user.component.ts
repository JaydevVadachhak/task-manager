import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/password.validator';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  pageHeading = 'Register User';

  constructor(private formBuilder: FormBuilder) {}

  registerUserForm = this.formBuilder.group(
    {
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      age: [
        '',
        [Validators.required, Validators.pattern('^(?:1[8-9]|[2-5][0-9]|60)$')],
      ],
    },
    {
      validators: [passwordValidator],
    }
  );

  get userName() {
    return this.registerUserForm.get('userName');
  }

  get email() {
    return this.registerUserForm.get('email');
  }

  get age() {
    return this.registerUserForm.get('age');
  }

  get password() {
    return this.registerUserForm.get('password');
  }

  get confirmPassword() {
    return this.registerUserForm.get('confirmPassword');
  }

  ngOnInit(): void {}

  onRegisterUser() {
    if (this.registerUserForm.valid) {
      console.log(this.registerUserForm.value);
    }
  }
}
