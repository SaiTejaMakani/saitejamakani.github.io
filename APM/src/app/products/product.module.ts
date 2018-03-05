import { NgModule } from '@angular/core';
import { ProductListComponent } from "../product/product.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpacesPipe } from "../product/convert-to-spaces.pipe";
import { ProductGaurdService } from "./product-gaurd.service";
import { ProductService } from "../product/product.service";
import { RouterModule } from "@angular/router";
import { SharedModule } from './../shared/shared.module';  

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate:[ ProductGaurdService ],
        component: ProductDetailComponent }
    ]),
    SharedModule
    
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductGaurdService
  ]
})
export class ProductModule { }
