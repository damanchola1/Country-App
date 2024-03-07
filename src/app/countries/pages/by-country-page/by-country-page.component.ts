import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  countries: Country[] = []

  constructor(private countryService: CountryService) {

  }

  searchByCountry(name: string) {
    this.countryService.searchCountry(name).subscribe(response => {
      this.countries = response
    })
  }


}
