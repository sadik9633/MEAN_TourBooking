import { Component ,OnInit} from '@angular/core';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit{

  tours:any=[]
searchItem:string=""

  constructor(private ts:TravelService){}

  ngOnInit(): void {
    this.ts.getAllTours().subscribe((result:any)=>{
this.tours= result.tours
    })

     this.ts.searchKey.subscribe((result:any)=>{
this.searchItem = result
     })    
  }
}
