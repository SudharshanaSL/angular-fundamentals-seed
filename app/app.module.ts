/**
 * A module is main building block of the application.
 * Every module contains components, routes, services and more.
 */

// all our dependent modules should be mentioned here

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component'
import {DataBindingComponent} from './app.databinding.component'

@NgModule({
  // to actually register this app component in the module,
  // we need to create something called declarations
  declarations: [
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    // app modules
    PassengerDashboardModule
  ],
  // root module is the only module that contains bootstrap property
  // module bootstraps component into index.html
  // it is a good practice to leave this as the last property
  bootstrap: [AppComponent]
})

export class AppModule {

}