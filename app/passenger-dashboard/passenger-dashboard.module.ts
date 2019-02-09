import {NgModule} from '@angular/core';
// directives are present in common module
import {CommonModule} from '@angular/common';

import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';


@NgModule({
    declarations: [
        PassengerDashboardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PassengerDashboardComponent
    ]
})

export class PassengerDashboardModule {

}