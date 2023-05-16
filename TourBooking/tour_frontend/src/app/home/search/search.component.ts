import { Component } from '@angular/core';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

constructor(private ts:TravelService){}

  search(event:any){
let searchTerm = event.target.value
this.ts.searchKey.next(searchTerm) 

  }
}
