import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  // key="name";
  transform(value: any[], expression?: any, reverse?: boolean): any {
    debugger
    const array: any[] = value.sort((a: any, b: any): number => {
      return a[expression] > b[expression] ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }
    return array;

    //   console.log("Entered in pipe*******  " + key);
    //   console.log("Array in pipe*******  " + JSON.stringify(array));

    //   if (key === undefined || key == '') {
    //     debugger
    //     return array;
    //   }

    //   var arr = key.split("-");
    //   var keyString = arr[0];   
    //   var sortOrder = arr[1];   
    //   var byVal = 1;

    //   array.sort((a: any, b: any) => {

    //     if (keyString === 'name') {
    //       debugger

    //       if (a[keyString] < b[keyString]) {
    //         debugger
    //         return (sortOrder === "asc") ? -1 * byVal : 1 * byVal;
    //       } else if (a[keyString] > b[keyString]) {
    //         return (sortOrder === "asc") ? 1 * byVal : -1 * byVal;
    //       } else {
    //         return 0;
    //       }
    //     }
    //   });
    //   return array;
    // }
  }
}
