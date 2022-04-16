import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  pageHeading = 'Help User';

  constructor(private formBuilder: FormBuilder) {}

  helpUserForm = this.formBuilder.group({
    helpTitle: ['', [Validators.required, Validators.minLength(3)]],
    helpDescription: ['', [Validators.required, Validators.minLength(10)]],
  });

  get helpTitle() {
    return this.helpUserForm.get('helpTitle');
  }

  get helpDescription() {
    return this.helpUserForm.get('helpDescription');
  }

  ngOnInit(): void {}

  onHelpUser() {}
}
