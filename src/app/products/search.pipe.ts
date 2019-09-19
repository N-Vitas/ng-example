import { Pipe, PipeTransform } from '@angular/core';
import { Shiny } from './products.interfase';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: Shiny[], search: string = ''): Shiny[] {
    if (!search.trim()) {
      return arr;
    }
    return arr.filter(shiny => {
      const keys = Object.keys(shiny);
      let find:boolean = false;
      keys.forEach(key => {
        if(typeof shiny[key] === 'number') {
          find = shiny[key].toString().toLowerCase().indexOf(search.toLowerCase()) !== -1;
          if(find){
            return find;
          }
        }
        if(typeof shiny[key] === 'string') {
          find = shiny[key].toLowerCase().indexOf(search.toLowerCase()) !== -1;
          if(find){
            return find;
          }
        }
      });
      return find;
    });
  }
}
