import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';
  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  constructor(private http: HttpClient) {}
  public searchCountry(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${value}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  public searchCapital(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${value}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  public searchCountryById(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  public searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}?`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
