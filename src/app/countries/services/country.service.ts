import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
    )
  }


  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      )

  }

  searchCapital(name: string): Observable<Country[]> {

    let url = `${this.apiUrl}/capital/${name}`
    return this.getCountriesRequest(url);

  }

  searchCountry(name: string): Observable<Country[]> {

    let url = `${this.apiUrl}/name/${name}`
    return this.getCountriesRequest(url);

  }

  searchRegion(name: string): Observable<Country[]> {

    let url = `${this.apiUrl}/region/${name}`
    return this.getCountriesRequest(url)

  }

}
