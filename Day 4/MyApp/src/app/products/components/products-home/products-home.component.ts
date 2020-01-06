import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/products.model';

@Component({
    selector: 'app-products-home',
    templateUrl: './products-home.component.html',
    styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit {
    allProducts: Product[];

    constructor(private productService: ProductsService) { }

    ngOnInit() {
        this.productService.getAllProducts().subscribe(list => {
            this.allProducts = list;
        })
    }

}
