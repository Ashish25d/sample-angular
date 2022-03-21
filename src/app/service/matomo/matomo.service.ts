import { Injectable } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';
import { CustomActionDimesion, CustomVisitDimension } from 'src/app/model/enum';

@Injectable({
  providedIn: 'root'
})
export class MatomoService {
  maxCustDimesionCount = 30;
  userInfo: any = {};

  constructor(private matomoTracker: MatomoTracker) { }

  private setCustomDimensions(customDimesions: any = {}) {
    for (let i = 1; i <= this.maxCustDimesionCount; i++) {
      this.matomoTracker.setCustomDimension(i, customDimesions[i])
    }
  }

  setUserId(userId: string, userDetails: any, pageName: string) {
    this.matomoTracker.setUserId(userId);
    this.setCustomDimensions(userDetails);
    this.userInfo = userDetails;
    this.matomoTracker.trackPageView(pageName);
  }

  trackEvent(actionDetail: any, customDimesions: any) {
    this.matomoTracker.trackEvent(actionDetail.Category, actionDetail.Action, actionDetail.Name, 1);
    this.setCustomDimensions({ ...this.userInfo, ...customDimesions });
  }
}
