import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  private map: any; // 'any' type since Leaflet types might not be loaded yet

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Leaflet only on the browser side
      import('leaflet').then(L => {
        this.initMap(L);
      });
    }
  }

  private initMap(L: any): void {
    // Initialize the map with the desired options
    this.map = L.map('map', {
      center: [51.505, -0.09], // Center coordinates
      zoom: 13, // Initial zoom level
      scrollWheelZoom: false,  // Disable zoom on scroll wheel
      touchZoom: false,        // Optionally disable touch zooming
      doubleClickZoom: false,  // Optionally disable double-click zoom
      zoomControl: true,       // Enable zoom controls (+/-)
    });

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Add a marker to the map
    L.marker([51.505, -0.09]).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
}
