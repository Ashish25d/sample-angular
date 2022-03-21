import { Component } from '@angular/core';
import { MatomoInjector, MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-angular';
  constructor(private matomoInjector: MatomoInjector, private matomoTracker: MatomoTracker) {
    this.matomoInjector.init('http://15.206.169.244/', 1);
    this.matomoTracker.setUserId('');
    this.matomoTracker.setCustomDimension(1, 'Ashish Dhodare');
    this.matomoTracker.setCustomDimension(2, 'Specialist Programmer');
  }


}
