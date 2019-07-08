import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/Model/category.model';
import { GoodsService } from 'src/app/Services/goods.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories: CategoryModel[];
  cats: string[];
  selectedFilter: string;
  constructor(private goodsService: GoodsService) {

  }

  ngOnInit() {
    this.goodsService.getCategories()
      .subscribe(response => this.categories = <Array<CategoryModel>>response);
  }
  selectFilter(i: number) {
    this.selectedFilter = this.categories[i].categoryId;
  }

}
