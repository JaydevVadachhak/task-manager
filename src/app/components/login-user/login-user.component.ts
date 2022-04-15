import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  pageHeading = 'Login User';

  constructor() {}

  ngOnInit(): void {}

  onLoginUser(loginUserForm: any) {
    if (loginUserForm.valid) {
      console.log(loginUserForm.value);
    }
  }
}
