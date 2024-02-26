import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { ProductsComponent } from './admin/products/products.component';
import { UpdateProductsComponent } from './admin/update-products/update-products.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminPageComponent,
        children : [
            {
                path: 'product',
                component: ProductsComponent
            },
            {
                path : 'product-update/:id',
                component : UpdateProductsComponent
            },
            {
                path : 'add-product',
                component : AddProductsComponent
            }
        ]
    },
    {
        path: "sign-in",
        component : SignInComponent
    },
    {
        path: "sign-up",
        component : SignUpComponent
    }
];
