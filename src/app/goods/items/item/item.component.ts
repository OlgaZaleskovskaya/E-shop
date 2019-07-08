import { Component, OnInit, Input } from '@angular/core';
import { GoodModel } from 'src/app/Model/good.model';
import { NgForm } from '@angular/forms';
import { GoodsRoutingModule } from '../../goods-routing.module';
import { SelectedGoodModel } from 'src/app/Model/selectedGood.model';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() good: GoodModel;
  isShowModal: boolean;
  colors: string[];
  sizes: string[];
  selectedColor: number;
  selectedSize: number;
  imagePathes: string[];
  currentPicture: number;
  review: string;
  starsArray: string[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.isShowModal = false;
    this.review = "";
    this.colors = ['#6EB2FB',
      '#00D3CA',
      '#F62F5E',
      '#FE5C07',
      '#F8E71C',
      '#7ED321',
      '#9013FE'];
    this.sizes = ['s', 'm', 'l', 'xl', 'xxl'];
    this.imagePathes = this.createImagesPathArray();
    this.currentPicture = 0;
    this.starsArray = [];


  }

  showModal() {
    this.isShowModal = true;
    this.starsArray = this.createStarsArray(this.good.stars);

  }
  selectColor(i: number): void {
    this.selectedColor = i;

  }
  selectSize(i: number): void {
    this.selectedSize = i;

  }

  private createImagesPathArray(): string[] {
    let tempo = [];
    this.good.picturesURL.forEach(item =>
      tempo.push(item));
    return tempo;
  }

  onSubmitReview(f: NgForm) {
    console.log("ddd");
  }

  addToCart() {
    this.cartService.addGood(this.good, this.colorConvertor(this.colors[this.selectedColor]),
      this.sizes[this.selectedSize]);
    this.isShowModal = false;

  }

  private createStarsArray(stars: number): string[] {
    let tempo = [];
    for (let i = 0; i < stars; i++) {
      tempo.push('../../../../assets/images/icons/icons-star-gold.png');
    }
    for (let i = 0; i < (7 - stars); i++) {
      console.log('grey', i);
      console.log('tempo', tempo);
      tempo.push('../../../../assets/images/icons/icons-star-grey.png');
    }

    return tempo;
  }

  private colorConvertor(color: string): string {
    switch (color) {
      case '#6EB2FB': return 'light blue';
      case '#00D3CA': return 'light green';
      case '#F62F5E': return 'pink';
      case '#FE5C07': return 'orange';
      case '#F8E71C': return 'yellow';
      case '#7ED321': return 'green';
      case '#9013FE': return 'blue';
    }

  }

}
