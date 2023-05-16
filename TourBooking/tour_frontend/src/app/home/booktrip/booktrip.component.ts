import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-booktrip',
  templateUrl: './booktrip.component.html',
  styleUrls: ['./booktrip.component.css']
})
export class BooktripComponent implements OnInit{
  bookingData:any
  tourId:any
  booking:any
 
  constructor(private ts:TravelService ,private http:ActivatedRoute,  ){
   
  }

  ngOnInit(): void {  
    this.ts.getbooking(JSON.parse(localStorage.getItem("currentEmail") || "")).subscribe((result:any)=>{
      this.bookingData=result.booking
    
     })

    
}


}