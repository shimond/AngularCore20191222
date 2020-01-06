import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
// import { ProductsModule } from './products/products.module';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
