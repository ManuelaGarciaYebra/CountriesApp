import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalCityComponent } from './pages/by-capital-city/by-capital-city.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent,
    TableComponent,
    CountryInputComponent,
  ],
  exports: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CountryModule {}
