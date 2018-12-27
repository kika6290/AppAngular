import {Component} from '@angular/core';
import { CourcesService } from '../Services/cources.servce';

@Component({
    selector:"cources",
    template:`
        <h2>{{getTitle()}}</h2>
        <ul>
            <li *ngFor="let cource of cources">
                {{cource}}
            </li>
        </ul>
        `
})
export class CourcesComponent
{
    title = "List of cources";
    cources;
    getTitle()
    {
        return this.title;
    }

    constructor(service:CourcesService){         
        this.cources = service.getCources()
    }
}