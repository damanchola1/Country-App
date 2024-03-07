import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  conuntries: Country[] = []
  isLoading = false
  constructor(private countryService: CountryService) {

  }

  searchByCapital(name: string) {
    this.isLoading = true
    this.countryService.searchCapital(name).subscribe(response => {
      this.conuntries = response
      this.isLoading = false
    })
  }

}
