import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  isError: boolean = false;
  term: string = '';
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  placeholder: string = 'Search by capital...';
  showSuggestions: boolean = false;
  constructor(private countryService: CountryService) {}
  search(term: string) {
    this.term = term;
    this.isError = false;
    this.countryService.searchCountry(term).subscribe(
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
  suggestions(term: string) {
    this.isError = false;
    this.term = term;
    this.showSuggestions = true;
    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 3))
      // (err) => (this.suggestedCountries = [])
    );
  }

  searchSuggestions(term: string) {
    this.search(term);
  }
}
