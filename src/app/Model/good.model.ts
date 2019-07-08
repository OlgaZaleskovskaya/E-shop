export class GoodModel {
    goodName: string;
    goodId: string;
    subParentId: string;
    parentId: string;
    picturesURL: string[];
    description: string;
    price: number;
    stars: number;
    discountedPrice: number;
    colors: string[];
    sizes: string[];



    constructor(private name: string, private id: string,
        private pId: string, private quantity?: number) {
        this.goodId = id;
        this.goodName = name;
        this.parentId = pId;
        this.colors = ['$chooseColorBlue',
            '$chooseColorLightGreen',
            '#F62F5E',
            '#FE5C07',
            '#F8E71C',
            '#7ED321',
            '#9013FE'];
       this.sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    }

}