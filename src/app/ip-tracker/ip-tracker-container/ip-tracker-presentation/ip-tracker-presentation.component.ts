import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { IpTrackerPresenterService } from '../ip-tracker-presenter/ip-tracker-presenter.service';
@Component({
  selector: 'app-ip-tracker-presentation',
  templateUrl: './ip-tracker-presentation.component.html',
  viewProviders: [IpTrackerPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IpTrackerPresentationComponent implements OnInit, AfterViewInit {
  private map: any;
  public mapForm: FormGroup;
  private _locationData: any;
  private _coordinates: any;


  @Input() public set locationData(value: any) {
    if (value) {
      this._locationData = value;
      L.marker([value.latitude, value.longitude]).addTo(this.map);
      this.map.flyTo([value.latitude, value.longitude], 15);
    }
  }
  public get locationData(): any {
    return this._locationData;
  }


  @Input() public set coordinatePoints(value: any) {
    if (value) {
      this._coordinates = value;
    }
  }
  public get coordinatePoints(): any {
    return this._coordinates;
  }

  @Output() public location: EventEmitter<any>;
  public latitude: number = 1;
  public longitude: number = 1;

  constructor(
    private fb: FormBuilder,
    private mapService: IpTrackerPresenterService
  ) {
    this.mapForm = this.mapService.buildForm();
    this.location = new EventEmitter();
  }

  ngOnInit(): void {
    this.mapService.getLocationData$.subscribe((res) => {
      this.location.emit(res);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [20.603086, 72.918248],
      zoom: 7,
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
    L.Icon.Default.prototype.options.iconUrl = 'assets/images/icon-location.svg';
    L.Icon.Default.prototype.options.shadowUrl = '';
  }

  public onSubmit() {
    this.mapService.submit(this.mapForm.value.ipAddress);
    if (this.coordinatePoints) {
      this.latitude = this.coordinatePoints.latitude;
      this.longitude = this.coordinatePoints.longitude;
      L.marker([this.latitude, this.longitude]).addTo(this.map);
      this.map.flyTo([this.latitude, this.longitude], 15);
    }
  }
}
