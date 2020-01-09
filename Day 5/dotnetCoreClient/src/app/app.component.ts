import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dotnetCoreClient';

    async addToServer() {
        const d = new Date(new Date().setFullYear(2001));
        const res = await this.personService.addNewPerson({ name: 'david', birthdate: d, email: 'daasdsa@gmail.com' });
        alert('new Person id = ' + res.id);
    }
    constructor(private personService: PeopleService) {
        console.log('AppComponent created');
    }
}
