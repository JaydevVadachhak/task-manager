import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/service/user-profile.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUserData: any;
  constructor(
    private userService: UserService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit(): void {
    this.userProfileService.getCurrentUserData().subscribe((data) => {
      this.currentUserData = data;
    });
  }

  onUserLogOut() {
    this.userService.logOutUser();
  }
}
