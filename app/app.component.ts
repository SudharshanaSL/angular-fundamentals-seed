/**
 * What does a component do?
 * A component contains data and logic forming part of a dom tree
 */

import {Component} from '@angular/core'

interface Passenger {
  id: number,
  name: string,
  checkedIn: boolean
}

@Component({
  // creates html element for the component
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: ` <!-- Also referred as View -->
      <div class="app">
        <input
          type="text"
          [value]="name"
          (input)="handleChange($event.target.value)">
        <h1>ngFor</h1>
        <h3>Airline Passengers</h3>
        <ul>
          <h2>structural ngFor</h2>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [class.checked-in]="passenger.checkedIn"></span>
            {{i}} : {{passenger.name}}
          </li>
        </ul>
        <hr>
        <ul>
          <h2>structural ngFor</h2>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [ngClass]="{ 
                'checked-in': passenger.checkedIn,
                'cancelled' : passenger.checkedIn == undefined,
                'did-not-book': passenger.id == undefined }">
              </span>
            {{i}} : {{passenger.name}}
          </li>
        </ul>
        <hr>
        <ul>
          <h2>style</h2>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [ngStyle]="{ 
                backgroundColor: (passenger.checkedIn ? 'green':'#c0392b')}">
              </span>
              element.style.background = 'red'
            {{i}} : {{passenger.name}}
          </li>
        </ul>
        <hr>
        <ul>
          <h2>ngStyle</h2>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [style.backgroundColor]="(passenger.checkedIn ? 'green':'#c0392b')">
              </span>
              element.style.background = 'red'
            {{i}} : {{passenger.name}}
          </li>
        </ul>
      </div>
    `
})
/**
 * Component decorator gets bound to this app component
 * All of the properties exposed here will be available in template
 */
export class AppComponent {
  name: string = ""
  handleChange(value: string) {
    this.name = value;
  }
  passengers: Passenger[] = [{
    id: 1,
    name: this.name+1,
    checkedIn: false
  }, {
    id:2,
    name: this.name+2,
    checkedIn: true
  }, {
    id:3,
    name: this.name+3,
    checkedIn: false
  }, {
    id:undefined,
    name: this.name+4,
    checkedIn: false
  }, {
    id:5,
    name: this.name+5,
    checkedIn: undefined
  }]
}