import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-kefel-board',
    templateUrl: './kefel-board.component.html',
    styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit {

    values: Array<{ x: number, y: number }> = [];

    constructor(private router: Router) { }

    ngOnInit() {
        for (let index = 1; index <= 10; index++) {
            for (let index2 = 1; index2 <= 10; index2++) {
                this.values.push({ x: index, y: index2 });
            }
        }
    }

    navigateWithParam(x: number, y: number, op: string) {
        this.router.navigate(['kefel-result', x, y], { queryParams: { operator: op, user: 'shimon' } })
    }

}
