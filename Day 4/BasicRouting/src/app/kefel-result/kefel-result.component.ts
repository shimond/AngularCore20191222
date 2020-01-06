import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, distinctUntilChanged, debounce, debounceTime } from 'rxjs/operators';
@Component({
    selector: 'app-kefel-result',
    templateUrl: './kefel-result.component.html',
    styleUrls: ['./kefel-result.component.scss']
})
export class KefelResultComponent implements OnInit, OnDestroy {

    sum$: Observable<number>;
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        console.log('KefelResultComponent ngOnInit')
        // combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams]).subscribe(([urlParams, queryParams]) => {
        //     const x = +urlParams.xParam;
        //     const y = +urlParams.yParam;
        //     const op = queryParams.operator || '*';
        //     const state = `${x} ${op} ${y}`;
        //     this.sum = eval(state);
        // });


        this.sum$ = combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams]).pipe(map(([urlParams, queryParams]) => {
            const x = parseInt(urlParams.xParam, 10);
            const y = +urlParams.yParam;
            const op = queryParams.operator || '*';
            const state = `${x} ${op} ${y}`;
            return +eval(state);
        }),
            distinctUntilChanged(),
            debounceTime(1000));




    }

    ngOnDestroy() {
        console.log('KefelResultComponent ngOnDestroy')
    }

}
