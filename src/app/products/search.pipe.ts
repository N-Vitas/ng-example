import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], search: string = ''): any[] {
    if (!search.trim()) {
      return arr;
    }
    return arr.filter(obj => {
      const keys = Object.keys(obj);
      let find:boolean = false;
      keys.forEach(key => {
        if(typeof obj[key] === 'number') {
          find = obj[key].toString().toLowerCase().indexOf(search.toLowerCase()) !== -1;
          if(find){
            return find;
          }
        }
        if(typeof obj[key] === 'string') {
          find = obj[key].toLowerCase().indexOf(search.toLowerCase()) !== -1;
          if(find){
            return find;
          }
        }
      });
      return find;
    });
  }
}
