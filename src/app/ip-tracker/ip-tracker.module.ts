import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpTrackerRoutingModule } from './ip-tracker-routing.module';
import { IpTrackerComponent } from './ip-tracker.component';
import { IpTrackerContainerComponent } from './ip-tracker-container/ip-tracker-container.component';
import { IpTrackerPresentationComponent } from './ip-tracker-container/ip-tracker-presentation/ip-tracker-presentation.component';


@NgModule({
  declarations: [
    IpTrackerComponent,
    IpTrackerContainerComponent,
    IpTrackerPresentationComponent
  ],
  imports: [
    CommonModule,
    IpTrackerRoutingModule
  ]
})
export class IpTrackerModule { }
