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
        <!--
            This is called an expression.
            Expression below, involves interpolation. 
            Interpolation here refers to usage of curly braces which bind properties to templates
        -->
        {{title + isHappy + '!'}}
      </div>
      <div>
        <!-- Since these are values inside expression of a component, we can perform operations -->
        {{numberOne + numberTwo}}
      </div>
      <div>
        {{isHappy? ':)':':('}}
      </div>
    `
})
/**
 * Component decorator gets bound to this app component
 * All of the properties exposed here will be available in template
 */
export class AppComponent {
  title: string;
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title  = "Sudharshana";
  }
}