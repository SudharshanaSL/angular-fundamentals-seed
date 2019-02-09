import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
    <div>
        <h3>Passenger List</h3>
            <span
            class="status"
            [class.checked-in]="detail.checkedIn"></span>
            {{detail.name}}
            <!--we tell angular that we need the json pipe with passenger being input-->
            <p>{{detail | json}}</p>
            <div class="date">
            <!--pipe will not output anything if value is null-->
            Checked in date: 
            {{detail.checkedIn? (detail.optionalCheckedInDate | date: 'dd-MMM-yyyy-GG' | uppercase): 'Not checked in'}}
            </div>
            <div class="children">
            Children: {{detail.children?.length || 0}}
            </div>
    </div>
    `
})

export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
    constructor() { }
}