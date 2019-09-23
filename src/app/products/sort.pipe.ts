import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], args: any[]): any[] {
    const view = args[0];
    const asc = args[1];
    if(view.length == 0) {
      return arr;
    }
    return arr.sort((a, b) => {
      console.log(view, asc, a[view] > b[view]);
      if(asc) {
        if(a[view] > b[view]) { return -1; }
        if(a[view] < b[view]) { return 1; }
        return 0;
      }
      if(a[view] > b[view]) { return 1; }
      if(a[view] < b[view]) { return -1; }
      return 0;
    })
  }

}
