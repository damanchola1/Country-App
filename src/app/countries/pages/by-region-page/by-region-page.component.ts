import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  regions: Country[] = []
  typeRegions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  selectedRegion?: Region

  constructor(private countryService: CountryService) {

  }

  searchByRegion(name: Region) {

    this.selectedRegion = name

    this.countryService.searchRegion(name).subscribe(response => {
      this.regions = response
    })
  }


}
