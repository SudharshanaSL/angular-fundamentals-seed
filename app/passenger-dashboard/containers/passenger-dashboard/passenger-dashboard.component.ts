import {Component, OnInit} from '@angular/core';

import {Passenger} from '../../models/passenger.interface';


@Component({
    selector: "passenger-dashboard",
    styleUrls: ['passenger-dashboard.component.scss'],
    template:`
    <div>
      <hr>
      <h3>Airline Passengers Dashboard</h3>
      <hr>
      <passenger-count
          [items]="passengers">
        </passenger-count>
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
    constructor() {}
    ngOnInit() {
      console.log("Initializing passenger dashboard component with ngOnInit");
      this.passengers = [{
        id: 1,
        name: this.name+1,
        checkedIn: false,
        mandatoryCheckedInDate: 1490742111111,
        optionalCheckedInDate: 1490742111111,
        children: null
      }, {
        id:2,
        name: this.name+2,
        checkedIn: true,
        mandatoryCheckedInDate: null,
        children: [{
          name: "abcd",
          age: 12
        }, {
          name: "efgh",
          age: 3
        }]
      }, {
        id:3,
        name: this.name+3,
        checkedIn: true,
        mandatoryCheckedInDate: 1490742000004,
        optionalCheckedInDate: 1490742000004,
        children: null
      }, {
        id:undefined,
        name: this.name+4,
        checkedIn: false,
        mandatoryCheckedInDate: null,
        children: null
      }, {
        id:5,
        name: this.name+5,
        checkedIn: undefined,
        mandatoryCheckedInDate: null,
        children: [{
          name: "abcd",
          age: 12
        }, {
          name: "efgh",
          age: 3
        }]
      }]
    }
    handleEdit(event) {
      console.log(event)
    }
    handleRemoval(event) {
      console.log(event);
    }
}