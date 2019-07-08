import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';

import { ItemsComponent } from './items/items.component';
import { GoodsComponent } from './goods.component';
import { PagesLimitPipe } from './pagesLimit.pipe';
import { ItemComponent } from './items/item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GoodsComponent, ItemsComponent,  PagesLimitPipe, ItemComponent],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    FormsModule
  ],
  exports: [
  GoodsComponent,
  //   ItemsComponent,
   
  
  ]
})
export class GoodsModule { }
