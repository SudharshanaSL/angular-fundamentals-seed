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
        <h1> {{title}} </h1>
        <!-- Sugar syntax is a cleaner and easier way of doing something -->
        <h1 innerHTML="title"> This does not work </h1>
        <!-- The angular way of setting document.innerHTML-->
        <h1 [innerHTML]="title"> This will work </h1>
        <!--
          We can set the properties we want to by enclosing property with square braces.
          Data comes from the class into the template and these square braces are helping bind the values.
        -->
        <img [src]="logo">
        <input type="text" [value]="name">
        <!-- 
          This code will throw error because there exists no property called hiBro
          <h1 [value]="hiBro"> </h1>
        -->
        <!-- There should be no comments within expressions -->
        <!-- Below expressions' results are undefined and will not be shown on UI -->
        {{undefined}}
        <!-- undefined, not shown on UI -->
        {{hiBro}}
        <!-- NaN, because undefined + number is not a number -->
        {{hiBro + 1.987}}
        <!-- concatenated string undefinedabcd, because undefined + string -->
        {{hiBro + "abcd"}}
        <!-- NaN, because undefined + boolean -->
        {{hiBro + true}}
        <!-- undefined, because undefined + array -->
        {{hiBro + []}}
      </div>
    `
})
/**
 * Component decorator gets bound to this app component
 * All of the properties exposed here will be available in template
 */
export class AppComponent {
  title: string;
  name: string = "One Way Data Flow Property Binding"; // if name is not set it will show undefined on UI text box
  logo: string = "img/logo.svg";
  constructor() {
    this.title  = "Sudharshana";
  }
}