import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term: string): any[] {
    if (!items || !term) {
      return items;
    }

    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
    );
  }

}
