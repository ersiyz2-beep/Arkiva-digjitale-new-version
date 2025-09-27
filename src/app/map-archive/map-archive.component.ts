import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService, AlbanianCity } from '../services/map.service';

@Component({
  selector: 'map-archive',
  templateUrl: './map-archive.component.html',
  styleUrls: ['./map-archive.component.css']
})
export class MapArchiveComponent implements OnInit {
  cities: AlbanianCity[] = [];
  selectedCity: AlbanianCity | null = null;
  hoveredCity: AlbanianCity | null = null;

  constructor(
    private mapService: MapService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cities = this.mapService.getCities();
  }

  onCityClick(cityId: string): void {
    const city = this.mapService.getCityById(cityId);
    if (city) {
      this.selectedCity = city;
      this.router.navigate([city.route]);
    }
  }

  onCityHover(cityId: string): void {
    this.hoveredCity = this.mapService.getCityById(cityId) || null;
  }

  onCityLeave(): void {
    this.hoveredCity = null;
  }

  getCityClass(cityId: string): string {
    const baseClass = 'land';
    if (this.selectedCity?.id === cityId) {
      return `${baseClass} selected`;
    }
    if (this.hoveredCity?.id === cityId) {
      return `${baseClass} hovered`;
    }
    return baseClass;
  }
}