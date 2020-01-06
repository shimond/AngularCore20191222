import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'useRouting';

    // zap.co.il/products/hp/printers/HP9922231
    // ['products', companyName, 'printers', prductId]
    navigateTo(where: string) {
        this.router.navigate([where]);
    }

    constructor(private router: Router) {

    }
}
