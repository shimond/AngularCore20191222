import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private configModel: ConfigModel;

    async init() {
        this.configModel = await this.http.get<ConfigModel>('/assets/config.json').toPromise();
        console.log('configModel', this.configModel)
        await this.delay(200);
    }

    getConfiguration(): ConfigModel {
        return this.configModel;
    }


    delay(mili) {
        return new Promise<void>((res, rej) => {
            setTimeout(x => { res(); }, mili);

        });
    }
    constructor(private http: HttpClient) {

    }
}
