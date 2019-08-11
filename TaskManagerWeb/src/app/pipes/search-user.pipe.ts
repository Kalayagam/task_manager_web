import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(user => {
      return user.firstName.toLowerCase().includes(searchText) || user.lastName.toLowerCase().includes(searchText);
    });
   }

}
