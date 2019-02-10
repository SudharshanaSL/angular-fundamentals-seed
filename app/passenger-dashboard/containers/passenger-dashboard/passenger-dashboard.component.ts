import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: "passenger-dashboard",
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <hr>
      <h3>Airline Passengers Dashboard</h3>
      <hr>
      <passenger-count
          [items]="passengers">
      </passenger-count>
      <div *ngFor="let passenger of passengers;">
        {{ passenger.name }}
      </div>
      <passenger-detail 
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemoval($event)">
      </passenger-detail>
    </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
  name: string = "pass";
  passengers: Passenger[];
  constructor(private passengerService: PassengerDashboardService) {
  }
  ngOnInit() {
    console.log("Initializing passenger dashboard component with ngOnInit");
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data)
  }
  handleEdit(event: Passenger) {
    this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id)
          passenger = Object.assign({}, passenger, event);
        return passenger;
      })
    })
  }
  handleRemoval(event: Passenger) {
    this.passengerService.removePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id
      })
    })
  }
}