export class SelectedGoodModel {

    id: string;
    name: string;
    color: string;
    size: string;
    amount: number;
    price: number;


    constructor(id: string, name: string, color: string, size: string, amount: number, price: number) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.size = size;
        this.amount = amount;
        this.price = price;
    }

    public setAmount(n: number) {
        if (n > 0) {
            this.amount = n;
        } else {
            this.amount = 0;
        } 
    }

}