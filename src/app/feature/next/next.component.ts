import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  constructor(private matomoTracker: MatomoTracker) { }

  ngOnInit(): void {
    this.matomoTracker.trackPageView('Next')
  }

}
