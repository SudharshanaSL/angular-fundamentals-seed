import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

// This is a stateless component
// Modification of detail does not modify the parent container's array unless event emitters or @output is used

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
    <div>
        <h3>Passenger List</h3>
            <span
            class="status"
            [class.checked-in]="detail.checkedIn"></span>
            <div *ngIf="editing">
                <input type="text" 
                    [value]="detail.name"
                    (input)="onNameChange(name.value)"
                    #name>
            </div>
            <div *ngIf="!editing">
                {{detail.name}}
            </div>
            <button (click)="toggleEdit()">
                {{this.editing? "Done":"Edit"}}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
            <!--we tell angular that we need the json pipe with passenger being input-->
            <!-- <p>{{detail | json}}</p> -->
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

export class PassengerDetailComponent implements OnChanges, OnInit{
    @Input()
    detail: Passenger;
    editing: boolean = false;

    // bind event emitter to our custom event property
    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnChanges(changes) {
        // this gets called before ngOnInit
        if(changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
        console.log("ngOnChanges")
    }

    ngOnInit() {
        console.log("ngOnInit")
    }

    onNameChange(value: string) {
        // this gets called before toggleEdit
        console.log("Name change")
        this.detail.name = value;
    }

    toggleEdit() {
        // this gets called before ngOnChanges
        console.log("toggling Edit mode")
        if(this.editing)
            this.edit.emit(this.detail);
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }
}