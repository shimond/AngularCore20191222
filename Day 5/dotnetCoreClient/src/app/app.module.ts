import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInteceptorService } from './services/my-inteceptor.service';

export function initConfig(configService: ConfigService) {
    return async () => {
        return await configService.init();
    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: initConfig,
        multi: true,
        deps: [ConfigService]

    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: MyInteceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
