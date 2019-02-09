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
        <hr>
        if you use web components, ngIf can be used as a property binding as ngIf is a property of the declared template below
        <template [ngIf]="name.length >= 3">
          <div>
            Searching for... {{name}}
          </div>
        </template>
        <hr>
        <!--ngIf is a structural directive-->
        * before ngIf is nothing but sugar syntax for not declaring a template
        <div *ngIf="name.length >= 3">
          Searching for... {{name}}
        </div>
        <hr>
        <h1>ngFor</h1>
        <h3>Airline Passengers</h3>
        <ul>
          <h2>structural ngFor</h2>
          <li *ngFor="let passenger of passengers; let i = index">
            <hr>
            {{i}} :
            {{passenger.id}},
            {{passenger.name}},
            {{passenger.checkedIn}}
          </li>
        </ul>
        <hr>
        <ul>
          <h2>web components offer data encapsulation</h2>
          <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
            <li>
              <hr>
              {{i+1}} :
              {{passenger.name}},
              {{passenger.checkedIn}}
            </li>
          </template>
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
    name: this.name+2,
    checkedIn: false
  }, {
    id:4,
    name: this.name+2,
    checkedIn: false
  }, {
    id:5,
    name: this.name+2,
    checkedIn: true
  }]
}