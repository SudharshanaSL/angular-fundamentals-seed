/**
 * What does a component do?
 * A component contains data and logic forming part of a dom tree
 */

import {Component} from '@angular/core'

/** 
 * Please import the following module in app.module.ts to use this component
 * import {FormsModule} from '@angular/forms'
*/

@Component({
  // creates html element for the component
  selector: "data-binding",
  styleUrls: ["app.databinding.component.scss"],
  // back ticks are es6 feature to serve as multi line strings
  // assigning a template to particular component
  // templateUrl: './app.component.html'
  template: ` <!-- Also referred as View -->
      <div class="app">
        <!--
            This is called an expression.
            Expression below, involves interpolation. 
            Interpolation binding here refers to usage of curly braces which bind properties to templates
        -->
        <h1> <b>Interpolation</b> binding example - {{title}} </h1>
        <!-- Sugar syntax is a cleaner and easier way of doing something -->

        <hr>
        <h1 class="textcenter" [class.textright]='true'>This is called <b>class</b> binding</h1>
        <hr>
        <h1 innerHTML="title"> This does not work </h1>
        <!-- Be careful not to use interpolation binding for attributes or properties expecting boolean values -->
        <h1 hidden="{{undefined}}"> This is hidden whenever title is set </h1>
        <hr>

        <!-- The angular way of setting document.innerHTML-->
        <h1> This will work and is called <b>property</b> binding </h1>
        <h1 [innerHTML]="title"> This will work and is called <b>property</b> binding </h1>
        <hr>

        <h1 [style.font-size.px]="20"> This will work and is called <b>style</b> binding </h1>
        <hr>

        <h1 [attr.id]="somerandomid"> This will work and is called <b>attribute</b> binding.</h1>
        <hr>
        <!--
          We can set the properties we want to by enclosing property with square braces.
          Data comes from the class into the template and these square braces are helping bind the values.
        -->
        <img class="logo" [src]="logo">
        <input type="text" 
            [value]="name" 
            (input)="handleInput($event)"
            (blur)="handleBlur($event)">
        <div> 
          {{ name }} - Example of component to view and view to component one way data flows being combined to form two way data flow
        </div>
        <hr>
        <input type="text" 
            [ngModel]="nameNgModel"
            (ngModelChange)="handleChange($event)">
        <div> 
          {{ nameNgModel }} - Example of usage of ngModel and ngModelChange
        </div>
        <hr>
        <input type="text" 
            [(ngModel)]="nameNgModel">
        <div> 
          {{ nameNgModel }} - Example of usage of ngModel
          <h1>
            Here we listen to an event inside of a property binding.
            This is called two way data binding syntax.
            The event that is fired is similar to that of handleChange.
          </h1>
        </div>
        <hr>
        <button (click)="handleClick()">
          Reset to Default
        </button>
        <!-- 
          This code will throw error because there exists no property called hiBro
          <h1 [value]="hiBro"> </h1>
        -->
        <!-- There should be no comments within expressions as it will lead to errors -->
        <!-- Below expressions' results are undefined and will not be shown on UI -->
        <hr>
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
export class DataBindingComponent {
  title: string;
  nameNgModel: string = "ngModel binding"
  name: string = "One Way Data Flow Property Binding"; // if name is not set it will show undefined on UI text box
  logo: string = "img/logo.svg";
  constructor() {
    this.title  = "Sudharshana";
  }
  handleDoubleClick(event: any) {
    this.name = "Double Clicked"
  }
  handleClick() {
    this.name = "One Way Data Flow Event Binding"
  }
  handleInput(event: any) {
    this.name = event.target.value
  }
  handleChange(value: string) {
    this.nameNgModel = value
  }
  // if handleBlur was not set, there would have been error
  handleBlur(event:any) {
    // any is a typescript type that allows to pass any object
    console.log(event)
    console.log(event.target.value)
    this.name = event.target.value
  }
}