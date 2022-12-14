import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.page.html',
  styleUrls: ['./unit-detail.page.scss'],
})
export class UnitDetailPage implements OnInit {
  places: Place[];
  unitDetails: string[] = [
    'Unit Number: ',
    'Project Name: ',
    'Floor Area (sqm): ',
    'Date Of Sale: ',
    'Flat Model: ',
    'Max Floor: ',
    'Min Floor: ',
    'Private/Public: ',
    'Remaining Lease (2022): ',
    'Sale price ($): ',
    'Type: '
  ]

  constructor(
    private homeService: HomeService,
    //private router: Router
  ) { }

  ngOnInit() {
    this.places = this.homeService.allPlaces;
  }


  handleChange(event) {
    console.log(event.detail.value);
  }


}
