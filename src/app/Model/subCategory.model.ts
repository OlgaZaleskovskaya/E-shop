export class SubCategoryModel {
    subCategoryName: string;
    subCategoryId: string;
    parentId: string;
    amount?: number;

    constructor(private name: string, private id: string, 
        private pId: string, private quantity?: number) {
     this.subCategoryId = id;
     this.subCategoryName = name;
     this.parentId = pId;
     this.amount = quantity;
    }

}