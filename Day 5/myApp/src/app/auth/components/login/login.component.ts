import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servics/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CanExit } from 'src/app/models/can-exit';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, CanExit {

    isNotAllowed$: Observable<boolean>;
    private loginForm: FormGroup;
    constructor(private authService: AuthService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {


    }
    canExit() {
        if (this.loginForm.dirty) {
            return confirm('לצאת??');
        }
        return true;
    }

    ngOnInit() {
        this.isNotAllowed$ = this.activatedRoute.fragment.pipe(map(x => {
            if (x === 'nowAllowed') { return true; }
            return false;
        }))

        this.loginForm = this.fb.group({
            un: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    isAuth() {
        return this.authService.isUserAuthenticated();
    }

    logout() {
        this.authService.logout();
    }

    async login() {
        const isOk = await this.authService.login(this.loginForm.value.un, this.loginForm.value.password);
        if (!isOk) {
            alert('בדוק פרטים יא חלש');
        } else {
            this.router.navigate(['/']);
        }

    }

}
