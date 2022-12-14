import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  regions: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  activatedRegion: string = '';
  countries: Country[] = [];
  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {
    this.activatedRegion = region;
    //we clean the regions everytime we click again
    this.countries = [];
    this.countryService.searchByRegion(region).subscribe((resp) => {
      this.countries = resp;
    });
  }

  getCSSClass(region: string): string {
    return region === this.activatedRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
