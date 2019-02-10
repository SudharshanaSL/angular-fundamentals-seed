import { Http } from '@angular/http'

import { Passenger } from "./models/passenger.interface";
import { Injectable } from '@angular/core';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {
    }

    getPassengers(): Passenger[] {
        return [{
            id: 1,
            name: "passenger-" + 1,
            checkedIn: false,
            mandatoryCheckedInDate: 1490742111111,
            optionalCheckedInDate: 1490742111111,
            children: null
        }, {
            id: 2,
            name: "passenger-" + 2,
            checkedIn: true,
            mandatoryCheckedInDate: null,
            children: [{
                name: "abcd",
                age: 12
            }, {
                name: "efgh",
                age: 3
            }]
        }, {
            id: 3,
            name: "passenger-" + 3,
            checkedIn: true,
            mandatoryCheckedInDate: 1490742000004,
            optionalCheckedInDate: 1490742000004,
            children: null
        }, {
            id: undefined,
            name: "passenger-" + 4,
            checkedIn: false,
            mandatoryCheckedInDate: null,
            children: null
        }, {
            id: 5,
            name: "passenger-" + 5,
            checkedIn: undefined,
            mandatoryCheckedInDate: null,
            children: [{
                name: "abcd",
                age: 12
            }, {
                name: "efgh",
                age: 3
            }]
        }]
    }
}