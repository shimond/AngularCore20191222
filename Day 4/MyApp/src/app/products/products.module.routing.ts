import { Route } from '@angular/router';
import { ProductsRootComponent } from './components/products-root/products-root.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsEditAddComponent } from './components/products-edit-add/products-edit-add.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';

export const PRODUCTS_ROUTES: Route[] = [
    {
        path: '', component: ProductsRootComponent,
        children: [
            { path: '', component: ProductsHomeComponent },
            { path: 'add-new', component: ProductsEditAddComponent }
        ]   
    }
];