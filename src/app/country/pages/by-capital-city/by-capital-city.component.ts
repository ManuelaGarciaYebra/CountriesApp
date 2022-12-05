import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-city',
  templateUrl: './by-capital-city.component.html',
  styleUrls: ['./by-capital-city.component.css'],
})
export class ByCapitalCityComponent {
  public isError: boolean = false;
  public term: string = '';
  public countries: Country[] = [];
  constructor(private countryService: CountryService) {}
  public search(term: string) {
    this.term = term;
    this.isError = false;
    this.countryService.searchCapital(term).subscribe(
      (resp) => {
        console.log(resp);
        this.countries = resp;
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
}
