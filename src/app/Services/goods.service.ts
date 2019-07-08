import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, tap, toArray, map, mergeMap, flatMap, skip, take } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class GoodsService {


    constructor(private http: HttpClient) { }

    getCategories() {
        const FILE_NAME = "/assets/data/category.json";
        return this.http.get(FILE_NAME, { responseType: 'json' })
            .pipe(
                tap( // Log the result or error
                    data => console.log(FILE_NAME, data),
                    error => console.log(FILE_NAME, error)
                )
            );
    }

    getSubCategories() {
        const FILE_NAME = "/assets/data/subCategory.json";
        return this.http.get(FILE_NAME, { responseType: 'json' })
            .pipe(
                tap( // Log the result or error
                    data => console.log(FILE_NAME, data),
                    error => console.log(FILE_NAME, error)
                )
            );
    }

    getGoods(currentPage: number, itemsPerPage: number, subParentId?: string, parentId?: string) {
        const FILE_NAME = "/assets/data/goods.json";
        const skippedItems = (currentPage - 1) * itemsPerPage;
        return this.http.get(FILE_NAME, { responseType: 'json' })
            .pipe(
                mergeMap(val => { return from(<Array<Object>>val) }),
                filter(val => {
                    if (!subParentId && !parentId) {
                        return val["subParentId"] != undefined;
                    } else {
                        if (parentId) {
                            return val["parentId"] == parentId;
                        }
                        return val["subParentId"] == subParentId;
                    }
                }
                ),
                skip(skippedItems),
                take(itemsPerPage),
                toArray(),
            );
    }

    
    getCountries(){
        const FILE_NAME = "/assets/data/country.json";
        return this.http.get(FILE_NAME, { responseType: 'json' });
    }

    getShippingOptions(){
        const FILE_NAME = "/assets/data/shippingOptions.json";
        return this.http.get(FILE_NAME, { responseType: 'json' });
    }
}

