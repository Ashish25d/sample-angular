import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatomoService } from 'src/app/service/matomo/matomo.service';
import { CustomActionDimesion, CustomVisitDimension } from '../../model/enum'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userForm: FormGroup = new FormGroup(
    {
      username: new FormControl('', { validators: [Validators.required] }),
      name: new FormControl('', { validators: [Validators.required] }),
      designation: new FormControl('', { validators: [Validators.required] }),
      age: new FormControl('', { validators: [Validators.required] })
    }
  );
  actionForm: FormGroup = new FormGroup(
    {
      eventName: new FormControl('', { validators: [Validators.required] }),
      model: new FormControl('', { validators: [Validators.required] }),
      series: new FormControl('', { validators: [Validators.required] }),
      year: new FormControl('', { validators: [Validators.required] }),
    }
  );

  constructor(private matomoService: MatomoService) { }

  ngOnInit(): void {
  }

  submitUserForm() {
    if (this.userForm.valid) {
      const userInfo = {
        [CustomVisitDimension.Fullname]: this.userForm.value.name,
        [CustomVisitDimension.Designation]: this.userForm.value.designation,
        [CustomVisitDimension.Age]: this.userForm.value.age
      };
      this.matomoService.setUserId(this.userForm.value.username, userInfo, 'Home');
    } else {
      console.log(this.userForm.controls, 'User Form is invalid');
    }
  }

  submitActionForm() {
    if (this.actionForm.valid) {
      const actionDetail = { Category: 'Attachment', Action: 'Download', Name: this.actionForm.value.eventName };
      const customDimesion = {
        [CustomActionDimesion.Model]: this.actionForm.value.model,
        [CustomActionDimesion.Series]: this.actionForm.value.series,
        [CustomActionDimesion.Year]: this.actionForm.value.year
      }
      this.matomoService.trackEvent(actionDetail, customDimesion);
    } else {
      console.log(this.actionForm.controls, 'Action Form is invalid');
    }
  }
}
