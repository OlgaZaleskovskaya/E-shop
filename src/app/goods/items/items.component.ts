import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GoodsService } from 'src/app/Services/goods.service';
import { GoodModel } from 'src/app/Model/good.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnChanges {
@Input() itemsPerPage:number;
@Input() currentPage:number;
@Input() currentSubCategoryId: string;
@Input() currentCategoryId: string;
goods: GoodModel[];
  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goods = [];
    this.goodsService.getGoods( this.currentPage, this.itemsPerPage)
    .subscribe(response => {
      this.goods = <Array<GoodModel>>response;
    });
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("this.currentSubCategoryId,", this.currentSubCategoryId);
    console.log("this.currentCategoryId,", this.currentCategoryId);
    this.goodsService.getGoods( this.currentPage, this.itemsPerPage, this.currentCategoryId, this.currentSubCategoryId )
    .subscribe(response => {
      this.goods = <Array<GoodModel>>response;
    });

  }

}
