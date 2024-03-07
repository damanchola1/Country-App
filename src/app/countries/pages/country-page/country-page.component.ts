import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  country?: Country

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService) {

  }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id)))
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        else {
          this.country = country
          return
        }
      })
  }

  searchCountry(code: string) {
    this.countryService.searchCountryByAlphaCode(code).subscribe(country => {
      console.log(country)
    })
  }

}
