import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Traveler } from '../shared/models/traveler.model';
import { Trip } from '../shared/models/trip.model';
import { Destination } from '../shared/models/destination.model'
import { TravelersService } from '../shared/services/travelers.service';
import { TripsService } from '../shared/services/trips.service';
import { DestinationsService } from '../shared/services/destinations.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public travelers: Traveler[];
  public trips: Trip[];
  public destinations: Destination[];
  public selectedTraveler: Traveler;

  constructor(
    private _travelersService: TravelersService, 
    private _tripsService: TripsService,
    private _destinationsService: DestinationsService
  ) { }

  ngOnInit() {
    this._travelersService.getTravelers()
    //& Next block
      .subscribe((res) => {
        console.log("here", res)
        this.travelers = res.travelers;
      },
    //& Error block
      error => console.error(error),

    //& Complete block
      () => {
        this.getRandomTraveler();
        console.log("final", this.selectedTraveler)
      }
      );

  
      this._tripsService.getTrips()
        .subscribe((res) => {
          // console.log("trips", res)
          this.trips = res.trips;
        },
        (err) => console.error(err));

      this._destinationsService.getDestinations()
        .subscribe((res) => {
          // console.log("desties", res)
          this.destinations = res.destinations
        })
  }

  public newMethod() {
    console.log("This is the complete block")
  }

  public getRandomTraveler() {
    this.selectedTraveler = this.travelers[Math.floor(Math.random() * this.travelers.length)]
    console.log("SELECTED ITEM", this.selectedTraveler)
  }
}
