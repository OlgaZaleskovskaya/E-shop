import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { GoodsModule } from '../goods/goods.module';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [HeaderComponent, FilterComponent, HighlightDirective],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    GoodsModule
  ],
  exports:
    [HeaderComponent
    ]
})
export class HeaderModule { }
