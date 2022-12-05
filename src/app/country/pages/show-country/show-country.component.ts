import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css'],
})
export class ShowCountryComponent implements OnInit {
  public country!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryById(id)),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country;
      });
    // this.activatedRoute.params.subscribe(
    //   ({ id }) => {
    //     console.log(id);
    //     this.countryService
    //       .searchCountryById(id)
    //       .subscribe((country) => console.log(country));
    //   }
    //id comes from params.id, the params that we defined in routing
    // );
  }
}
