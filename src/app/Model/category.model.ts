import { Serializable } from './serializable';

export class CategoryModel extends Serializable{
categoryName: string;
categoryId: string;

constructor(private name: string, private id: string){
    super();
    this.categoryId = id;
    this.categoryName = name;
}

}