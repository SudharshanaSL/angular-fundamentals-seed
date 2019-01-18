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
        <input type="text" 
            [(ngModel)]="nameNgModel">
        <div> 
          {{ nameNgModel }}
        </div>
      </div>
      <hr>
      <data-binding></data-binding>
    `
})
/**
 * Component decorator gets bound to this app component
 * All of the properties exposed here will be available in template
 */
export class AppComponent {
  nameNgModel: string = "ngModel binding"
}