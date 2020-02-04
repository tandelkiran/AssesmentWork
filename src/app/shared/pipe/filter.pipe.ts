import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, searchText: any): any {
    debugger
    if(searchText == null) return employees;

    return employees.filter(function(employees){
      debugger
      return employees.FirstName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
