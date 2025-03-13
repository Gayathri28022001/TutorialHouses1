import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';



@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
    templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //fieldsm == properties
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';


  //test housing location:
  housingLocation: HousingLocation = {

    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}




  



//methods
