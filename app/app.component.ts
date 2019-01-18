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
        <button
          (click)="handleClick(templateReference.value)">
          Get value
        </button>
        <input type="text" 
            #templateReference>
      </div>
      <hr>
    `
})
/**
 * Component decorator gets bound to this app component
 * All of the properties exposed here will be available in template
 */
export class AppComponent {
  handleClick(value: string) {
    console.log(value)
  }
}