import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matomoTracker: MatomoTracker) { }

  ngOnInit(): void {
  }

  matomoClick(): void {
    console.log("Tracking event");
    this.matomoTracker.setUserId('UserId');
    this.matomoTracker.setDocumentTitle('ngx-Matomo Test');
    this.matomoTracker.trackEvent('category', 'action', 'name', 2121);
  }
}
