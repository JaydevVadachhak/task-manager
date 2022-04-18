import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  pageHeading: string = 'Update User';
  currentUserData: any = '';

  constructor(
    private userProfileService: UserProfileService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userProfileService.getCurrentUserData().subscribe((data) => {
      this.currentUserData = data;
    });
  }

  updateUserForm = this.formBuilder.group({
    name: [
      this.currentUserData.name,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    age: [
      this.currentUserData.age,
      [Validators.required, Validators.pattern('^(?:1[8-9]|[2-5][0-9]|60)$')],
    ],
  });

  get name() {
    return this.updateUserForm.get('name');
  }

  get age() {
    return this.updateUserForm.get('age');
  }

  onUpdateUser(updateUserForm: any) {
    if (updateUserForm.valid) {
      this.userProfileService.updateCurrentUserData(updateUserForm.value);
    }
  }
}
