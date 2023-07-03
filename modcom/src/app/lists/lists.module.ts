import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { InformationsComponent } from './informations/informations.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    ListHomeComponent,
    InformationsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
