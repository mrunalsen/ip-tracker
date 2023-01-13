import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IpTrackerService } from '../ip-tracker.service';

@Component({
  selector: 'app-ip-tracker-container',
  templateUrl: './ip-tracker-container.component.html'
})
export class IpTrackerContainerComponent implements OnInit {

  public locationData$: Observable<any>;
  public coordinates$: Observable<any>;

  constructor(private trackerservice: IpTrackerService) {
    this.locationData$ = new Observable();
    this.coordinates$ = new Observable();
  }

  ngOnInit(): void {
  }

  public ipAddress(value: any) {
    this.locationData$ = this.trackerservice.getLocation(value);
    this.coordinates$ = this.trackerservice.getCoordinates(value);
  }
}
