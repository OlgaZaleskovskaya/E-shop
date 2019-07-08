import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SubCategoryModel } from 'src/app/Model/subCategory.model';
import { GoodsService } from '../Services/goods.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, OnChanges {

  @Input() currentCategoryId: string;
  currentSubCategoryId: string;
  subCategories: SubCategoryModel[];
  subCats: SubCategoryModel[];
  onFilterChange: Subject<string>;
  goodsQuantity: number;
  pagesArray: number[];
  currentPage: number;
  lastPageNumber: number;


  visiblePageNumbers: number;
  itemsPerPage: number;
  constructor(private goodsService: GoodsService) {

  }

  ngOnInit() {

    this.subCategories = [];
    this.subCats = [];
    this.goodsQuantity = 0;
    this.currentPage = 1;
    this.lastPageNumber = 5;
    this.visiblePageNumbers = 5;
    this.itemsPerPage = 5;
    this.pagesArray =[];

console.log("currentId", this.currentCategoryId);
    this.goodsService.getSubCategories()
      .subscribe(response => {
        this.subCats = <Array<SubCategoryModel>>response;
        this.subCategories = this.subCats;
        //--- pagination
        this.goodsQuantity = this.subCats.reduce(function (sum, current) {
          return sum + current['amount'];
        }, this.goodsQuantity);
        this.pagesArray = this.createPagesArray(this.goodsQuantity);
        //---  end pagination
      });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.subCats) {
      this.subCategories = this.subCats.filter((item, index, arr) => {
        return item['parentId'] == this.currentCategoryId
      }
      );

      this.currentPage = 1;

       //---new  pagination
    this.goodsQuantity = this.subCategories.reduce(function (sum, current) {
      return sum + current['amount'];
    }, 0);
    this.pagesArray = this.createPagesArray(this.goodsQuantity);
    //---  end new pagination
    }

   
  }

  private createPagesArray(q: number): number[] {
    const pages = Math.ceil(q / this.itemsPerPage);
    let arr = [];
    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    return arr;
  }

  private createSubCatIdArray(): string[] {
    let res = [];
    this.subCategories.forEach(item => res.push(item.parentId));
    return res;
  }

  onNextPage(b: boolean) {
    if (b) {
      this.lastPageNumber++;
    } else {
      this.lastPageNumber--;
    }
  }

}
