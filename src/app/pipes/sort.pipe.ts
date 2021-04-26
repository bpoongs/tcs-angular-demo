import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any[]): any {
    return value.sort((a, b) => {
      let x = a.productName;
      let y = b.productName;
      if(x < y){
        return -1;
      }else{
        return 1;
      }
      return 0;
    });
  }
}
    