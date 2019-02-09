/**
 * What does a component do?
 * A component contains data and logic forming part of a dom tree
 */

import {Component} from '@angular/core'

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
      </div>
      <hr>
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
}