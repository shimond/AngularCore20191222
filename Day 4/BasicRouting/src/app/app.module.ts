import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.module.routing';
import { KefelBoardComponent } from './kefel-board/kefel-board.component';
import { KefelResultComponent } from './kefel-result/kefel-result.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        KefelBoardComponent,
        KefelResultComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
