import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { Person } from '../models/person.model';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private http: HttpClient, private configService: ConfigService) { }

    addNewPerson(p: Person): Promise<Person> {
        const url = this.configService.getConfiguration().serverUrl + 'people';
        return this.http.post<Person>(url, p).toPromise();
    }
}
