import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpTrackerRoutingModule } from './ip-tracker-routing.module';
import { IpTrackerComponent } from './ip-tracker.component';
import { IpTrackerContainerComponent } from './ip-tracker-container/ip-tracker-container.component';
import { IpTrackerPresentationComponent } from './ip-tracker-container/ip-tracker-presentation/ip-tracker-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IpTrackerService } from './ip-tracker.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IpTrackerComponent,
    IpTrackerContainerComponent,
    IpTrackerPresentationComponent
  ],
  imports: [
    CommonModule,
    IpTrackerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    IpTrackerService
  ]
})
export class IpTrackerModule { }
