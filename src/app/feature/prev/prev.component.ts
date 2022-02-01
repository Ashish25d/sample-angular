import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-prev',
  templateUrl: './prev.component.html',
  styleUrls: ['./prev.component.scss']
})
export class PrevComponent implements OnInit {

  
  constructor(private matomoTracker: MatomoTracker) { }

  ngOnInit(): void {
    this.matomoTracker.trackPageView('Prev')
  }

}
