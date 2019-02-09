/**
 * What does a component do?
 * A component contains data and logic forming part of a dom tree
 */

import {Component} from '@angular/core'

interface Passenger {
  id: number,
  name: string,
  checkedIn: boolean,
  mandatoryCheckedInDate: number | null,
  optionalCheckedInDate?: number
}

@Component({
  // creates html element for the component
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: ` <!-- Also referred as View -->
      <div class="app">
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
        </li>
      </ul>
      <hr>
      </div>
    `
})
/**
 * Component decorator gets bound to this app component
 * All of the properties exposed here will be available in template
 */
export class AppComponent {
  name: string = "pass"
  handleChange(value: string) {
    this.name = value;
  }
  passengers: Passenger[] = [{
    id: 1,
    name: this.name+1,
    checkedIn: false,
    mandatoryCheckedInDate: 1490742111111,
    optionalCheckedInDate: 1490742111111
  }, {
    id:2,
    name: this.name+2,
    checkedIn: true,
    mandatoryCheckedInDate: null
  }, {
    id:3,
    name: this.name+3,
    checkedIn: true,
    mandatoryCheckedInDate: 1490742000004,
    optionalCheckedInDate: 1490742000004
  }, {
    id:undefined,
    name: this.name+4,
    checkedIn: false,
    mandatoryCheckedInDate: null
  }, {
    id:5,
    name: this.name+5,
    checkedIn: undefined,
    mandatoryCheckedInDate: null
  }]
}