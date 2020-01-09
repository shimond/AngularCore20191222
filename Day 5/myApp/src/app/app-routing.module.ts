import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthService } from './auth/servics/auth.service';
// import { ProductsModule } from './products/products.module';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent, canDeactivate: [AuthService] },
    // { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canActivate: [AuthService] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
