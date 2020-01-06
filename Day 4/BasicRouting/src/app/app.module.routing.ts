import { Route } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KefelBoardComponent } from './kefel-board/kefel-board.component';
import { KefelResultComponent } from './kefel-result/kefel-result.component';

export const APP_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'kefel', component: KefelBoardComponent },
    { path: 'kefel-result/:xParam/:yParam', component: KefelResultComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];