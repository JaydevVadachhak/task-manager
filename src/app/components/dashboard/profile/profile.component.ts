import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUserData: any;
  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.userProfileService.getCurrentUserData().subscribe((data) => {
      this.currentUserData = data;
      // console.log(this.currentUserData);
    });
  }

  onDeleteUser() {
    this.userProfileService.deleteCurrentUserData();
  }
}
