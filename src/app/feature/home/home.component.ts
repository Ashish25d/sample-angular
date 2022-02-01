import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MatomoTracker]
})
export class HomeComponent implements OnInit {
  defaultUsername = 'Ashish007d';
  userForm: FormGroup = new FormGroup(
    {
      username: new FormControl(this.defaultUsername, { validators: [Validators.required] }),
      model: new FormControl('N101', { validators: [Validators.required] }),
      series: new FormControl('Nexa', { validators: [Validators.required] }),
      year: new FormControl('2021', { validators: [Validators.required] }),
    }
  );

  constructor(private matomoTracker: MatomoTracker) { }

  ngOnInit(): void {
    this.matomoTracker.setUserId(this.defaultUsername);
    this.matomoTracker.trackPageView('Home');
  }

  matomoClick(): void {
    this.matomoTracker.setCustomDimension(1, 'Ashish Dhodare');
    this.matomoTracker.setCustomDimension(2, 'Specialist Programmer');
    // this.matomoTracker.setCustomDimension(3, 'Specialist Programmer');
    this.matomoTracker.trackEvent('Cat', 'Act', 'Nam', 2121);
    this.matomoTracker.trackPageView('Home');
  }

  submitUserForm() {
    if (this.userForm.valid) {
      this.matomoTracker.setUserId(this.userForm.value.username);
      this.matomoTracker.setCustomDimension(4, this.userForm.value.model);
      this.matomoTracker.setCustomDimension(5, this.userForm.value.series);
      this.matomoTracker.setCustomDimension(6, this.userForm.value.year);
      this.matomoTracker.trackPageView('Home');
    } else {
      console.log(this.userForm.controls, 'Form is invalid');
    }
  }
}
