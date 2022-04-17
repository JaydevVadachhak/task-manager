import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/password.validator';
import { patternPasswordValidator } from 'src/app/validators/pattern-password.validator';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  pageHeading = 'Register User';
  displayMessage: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  registerUserForm = this.formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          patternPasswordValidator(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Z\d@$!%*?&]{8,}$/i
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      age: [
        '',
        [Validators.required, Validators.pattern('^(?:1[8-9]|[2-5][0-9]|60)$')],
      ],
    },
    {
      validators: [passwordValidator, patternPasswordValidator],
    }
  );

  get name() {
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

  onRegisterUser(registerUserForm: any) {
    if (registerUserForm.valid) {
      this.userService.setUserData(this.registerUserForm.value);
      this.displayMessage = false;
      setTimeout(() => {
        this.displayMessage = true;
        this.router.navigate(['/userLogin']);
      }, 1000);
    } else {
      alert('Something Went Wrong! Please try again');
    }
  }
}
