import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navigations'
})
export class NavigationsPipe implements PipeTransform {

  transform(arr: any[], page: number): any[] {
    return arr.slice(page, page + 5);
  }

}