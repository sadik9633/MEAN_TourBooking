import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allTours:[], searchKey:string,allData:string ): any [] {
    const result:any=[]
    if(!allTours || searchKey=='' || allData=='' ){

      return allTours
    }
    allTours.forEach((tours:any)=>{
      if(tours[allData].trim().toLowerCase().includes(searchKey.toLocaleLowerCase())){

result.push(tours)

      }
    })
    
    return result;
  }

  

}
