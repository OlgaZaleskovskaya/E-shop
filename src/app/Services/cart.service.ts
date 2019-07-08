import { Injectable } from '@angular/core';

import { SelectedGoodModel } from '../Model/selectedGood.model';
import { GoodModel } from '../Model/good.model';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {

    goods: SelectedGoodModel[] = [];
    totalAmount: number = 0;
    totalSum: number = 0;
    changeAmount = new Subject<number>();
    changeSum = new Subject<number>();
    // add new Good to cart from mainPage
    addGood(good: GoodModel, color: string, size: string) {
        let ind = this.searchGoodInBasket(good, color, size)
        if (ind > -1) {
            this.goods[ind].amount++;
            this.onChangeAmount();
        } else {
            const item = new SelectedGoodModel(good.goodId,
                good.goodName,
                color,
                size,
                1,
                good.discountedPrice);
            this.goods.push(item);
            this.onChangeAmount();
        }

    }



    searchGoodInBasket(good: GoodModel, color: string, size: string): number {
        let ind = -1;
        this.goods.forEach((item, index, arr) => {
            if (item.id == good.goodId && item.color == color && item.size == size) {
                ind = index;
            }
        }
        )
        return ind;
    }
    // total amount of goods in the cart
    calculateTotalAmmountInCart(): number {
        return this.goods.reduce(function (sum, current) {
            return sum + current.amount;
        }, 0);
    }

    // total cost of goods in the cart
    calculateTotalSum(): number {
        let sum = this.goods.map(function (item) {
            return item.amount * item.price
        });
        return sum.reduce(function (sum, current) {
            return sum + current;
        }, 0);
    }
    private onChangeAmount() {
        this.totalAmount = this.calculateTotalAmmountInCart();
        this.totalSum = this.calculateTotalSum();
        this.changeAmount.next(this.totalAmount);
        this.changeSum.next(this.totalSum);
    }

    // add or remove unit of a  Good to cart from cart Page
    addUnit(i: number) {
        this.goods[i].setAmount(this.goods[i].amount + 1);
        this.onChangeAmount();
    }

    removeUnit(i: number) {
        if (this.goods[i].amount == 1) {
            this.removeGood(i);
            this.onChangeAmount();
        } else {
            this.goods[i].setAmount(this.goods[i].amount - 1);
            this.onChangeAmount();
        }
    }

    removeGood(i: number) {
        this.goods.splice(i, 1);
        this.onChangeAmount();
    }

    emptyCart() {
        this.goods = [];
        this.onChangeAmount();
    }


}

