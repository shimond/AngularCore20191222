import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class MyInteceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //customize request (add custom header)
        const headers = req.headers.set('shimon-header', '10');
        const reqCopy = req.clone({ headers });
        console.log('Request');

        return next.handle(reqCopy).pipe(
            tap(
                // on success
                response => {
                    if (response instanceof HttpResponse) {
                        console.log('Respose', response);
                    }
                },
                // on error
                ((error: HttpErrorResponse) => {
                    //if(e.status === 403 || e.status === 401|| ){
                    //}

                    //if(e.status === 500|| ){
                    //}
                    console.log('Error from server', error);

                })));
    }

    constructor() { }
}
