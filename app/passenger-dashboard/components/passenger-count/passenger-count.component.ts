import {Component, Input} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    template: `
    <div>
        <h3>Airline Passengers</h3>
        <div>
            Total checked in: {{checkedInCount()}}/{{items?.length}}
        </div>
    </div>
    `
})

export class PassengerCountComponent{
    // @Input() directive tells angular that this component is taking input via a binding
    @Input()
    items: Passenger[];
    checkedInCount() {
        if(!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}