import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsEditAddComponent } from './components/products-edit-add/products-edit-add.component';
import { ProductsRootComponent } from './components/products-root/products-root.component';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products.module.routing';



@NgModule({
    declarations: [ProductsHomeComponent, ProductsListComponent, ProductsEditAddComponent, ProductsRootComponent,],
    imports: [
        CommonModule,
        RouterModule.forChild(PRODUCTS_ROUTES)
    ]
})
export class ProductsModule { }

