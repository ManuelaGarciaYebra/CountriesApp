import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalCityComponent } from './country/pages/by-capital-city/by-capital-city.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ByRegionComponent,
  },
  {
    path: 'capital',
    component: ByCapitalCityComponent,
  },
  {
    path: 'country/:id',
    component: ShowCountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
    //redirectTo: 404component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
