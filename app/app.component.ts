import {Component} from '@angular/core'

@Component({
  // creates html element for the component
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  // back ticks are es6 feature to serve as multi line strings
  // assigning a template to particular component
  // templateUrl: './app.component.html'
  template: `
    <div class="app">
      {{title}}
    </div>`
})
/**
 * Component decorator gets bound to this app component
 * All of the properties exposed here will be available in template
 */
export class AppComponent {
  title: string;
  constructor() {
    this.title  = "Sudharshana";
  }
}