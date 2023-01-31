import { Component } from "@angular/core";
import { LoginService } from "../login/login.service";
import { IEvaluate } from "./evaluate";

@Component({
    templateUrl: './evaluate.component.html',
    styleUrls: ['./evaluate.component.css']
})

export class EvaluateEmployee {

    showButton: boolean = true;
    showForm: boolean = false;

    private _loginService;
    constructor(loginService: LoginService) {
        this._loginService = loginService;
    }

    displayForm(): void {
        this.showForm = !this.showForm;
        this.showButton = !this.showButton;
    }

    evalForm: IEvaluate[] = [
        { 
            "quality": "Job Knowledge", 
            "name": "jobKnowledge" 
        },
        {
            "quality": "Working Quality",
            "name": "workQuality"
        },
        {
            "quality": "Attendance/Punctuality",
            "name": "attendance"
        },
        {
            "quality": "Initiative",
            "name": "initiative"
        },
        {
            "quality": "Communication/Listening Skills",
            "name": "communication"
        },
        {
            "quality": "Dependability",
            "name": "dependability"
        }
    ];
}