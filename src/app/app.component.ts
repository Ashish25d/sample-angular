import { Component } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-angular';
  constructor(
    private matomoInjector: MatomoInjector
  ) {
    this.matomoInjector.init('http://13.233.206.107/', 1);
  }
}

