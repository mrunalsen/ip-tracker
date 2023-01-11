import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-ip-tracker-presentation',
  templateUrl: './ip-tracker-presentation.component.html'
})
export class IpTrackerPresentationComponent implements OnInit, AfterViewInit {
  private map: any;

  constructor() { }

  ngOnInit(): void {
    // this.initMap();
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [20.603086, 72.918248],
      zoom: 10,
      zoomControl: false
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });
    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);
    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
