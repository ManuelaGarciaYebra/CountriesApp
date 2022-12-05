import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  public isError: boolean = false;
  public term: string = '';
  public countries: Country[] = [];
  public placeholder: string = 'Search by capital...';
  constructor(private countryService: CountryService) {}
  public search(term: string) {
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
  public suggestions(term: string) {
    this.isError = false;
  }
}
