// all our dependent modules should be mentioned here

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'


import { AppComponent } from './app.component'

@NgModule({
  // to actually register this app component in the module,
  // we need to create something called declarations
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  // root module is the only module that contains bootstrap property
  // module bootstraps component into index.html
  // it is a good practice to leave this as the last property
  bootstrap: [AppComponent]
})

export class AppModule {

}