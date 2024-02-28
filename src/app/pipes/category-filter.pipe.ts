import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: any[], category: string): any[] {
    if (!items || !category) {
      return items;
    }

    return items.filter((item) => item.category.toLowerCase() === category.toLowerCase());
  }

}
