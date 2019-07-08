import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pagesLimit' })
export class PagesLimitPipe implements PipeTransform {
    transform(items: any[], lastPageNumber: number, visiablePageNumbers: number): any[] {
        if (!items) return [];
        return items.filter(it => {
            return  it <  lastPageNumber + 1 && it >  lastPageNumber - visiablePageNumbers;
        });
    }
}