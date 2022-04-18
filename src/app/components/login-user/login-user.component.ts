import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  pageHeading = 'Login User';
  displayMessage: boolean = true;

  usersList: any = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    window.sessionStorage.setItem('isAuth', 'false');
  }

  onLoginUser(loginUserForm: any) {
    this.userService.loginUser(
      loginUserForm.value.email,
      loginUserForm.value.password
    );
    // this.displayMessage = false;
    setTimeout(() => {
      // this.displayMessage = true;
      this.router.navigate(['userHome']);
    }, 1000);
  }
}
