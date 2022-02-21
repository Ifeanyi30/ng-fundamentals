import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ISession } from "../shared/event.model";



@Component({
    selector: 'create-session',
    templateUrl: './create_session.component.html',
    styles: [
        `
        em {
            float: right;
            font-size: 12px;
            color: #d32d38;
        }
        `
    ]
})
export class CreateSessionsComponent implements OnInit {
    @Output() saveSession: EventEmitter<ISession> = new EventEmitter<ISession>()
    @Output() cancelAddSession: EventEmitter<null> = new EventEmitter()
    newSessionForm!: FormGroup
    name!: FormControl
    presenter!: FormControl
    duration!: FormControl
    level!: FormControl
    abstract!: FormControl

    constructor(private router: Router){}

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(200)])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveNewSession(formValues: any) {
        let session: ISession = {
            id: 0,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveSession.emit(session)

    }

    cancel(){
        this.cancelAddSession.emit()
    }
}