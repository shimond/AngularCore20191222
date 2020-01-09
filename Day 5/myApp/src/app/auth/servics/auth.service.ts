import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, Router, CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanExit } from 'src/app/models/can-exit';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate, CanDeactivate<CanExit> {


    private isAuthenticate = false;

    login(un: string, password: string): Promise<boolean> {
        if (un === 'shi' && password === '1234') {
            sessionStorage.setItem('un', un);
            this.isAuthenticate = true;
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    logout() {
        sessionStorage.clear();
        this.isAuthenticate = false;
    }

    canActivate(ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isOk = this.isUserAuthenticated();
        if (isOk) {
            return true;
        } else {
            return this.router.parseUrl('/login#nowAllowed');
        }


    }

    canDeactivate(component: CanExit, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.canExit();
    }

    public isUserAuthenticated() {
        return this.isAuthenticate;
    }


    constructor(private router: Router) { }
}
