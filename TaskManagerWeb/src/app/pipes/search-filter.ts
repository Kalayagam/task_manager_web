import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchFilter implements PipeTransform {
  transform(items: any[], args?: any): any[] {
    if(!items) return [];

    if(!args || (args && (!args.searchText || !args.propertyName))) return items;

    const searchText = args.searchText.toLowerCase();
    const propertyName = args.propertyName;
    return items.filter(item => {
      return item[propertyName] && item[propertyName].toLowerCase().includes(searchText);
    });
   }
}