import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from './service/travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

tours:any=[]
searchItem:string=""

constructor(private ts:TravelService,private fb:FormBuilder,private router:Router) {
  
}


ngOnInit(): void {

  this.ts.getAllTours().subscribe((result:any)=>{
this.tours= result.tours
})

this.ts.searchKey.subscribe((result:any)=>{
  this.searchItem = result
})
}

}
