import {Component, OnInit} from '@angular/core';

import {Passenger} from '../../models/passenger.interface';


@Component({
    selector: "passenger-dashboard",
    styleUrls: ['passenger-dashboard.component.scss'],
    template:`
    <div>
        <h3>Airline Passengers</h3>
        <ul>
          <h2>structural ngFor</h2>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [class.checked-in]="passenger.checkedIn"></span>
            {{i}} : {{passenger.name}}
            <!--we tell angular that we need the json pipe with passenger being input-->
            <p>{{passenger | json}}</p>
            <div class="date">
              <!--pipe will not output anything if value is null-->
              Checked in date: 
              {{passenger.checkedIn? (passenger.optionalCheckedInDate | date: 'dd-MMM-yyyy-GG' | uppercase): 'Not checked in'}}
            </div>
            <div class="children">
              Children: {{passenger.children?.length || 0}}
            </div>
          </li>
        </ul>
        <hr>
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
}