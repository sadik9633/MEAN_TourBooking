import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-viewtour',
  templateUrl: './viewtour.component.html',
  styleUrls: ['./viewtour.component.css']
})
export class ViewtourComponent implements OnInit{

  viewTour:any;
currentEmail:any;
currentUser:any;
  tourId:any;
name:any
email:any
reviews:any
tours:any
inputValue:any
initialAmount:any
inititalCount: number = 1
serviceCharge: number = 10
initialTotal:any
vReview:any
  datedetails:Date;
  isSolid = false;
  
 constructor(private ar:ActivatedRoute ,private ts:TravelService,private fb:FormBuilder ,private router:Router,){

    this.currentEmail = localStorage.getItem('currentEmail');
    this.currentUser = localStorage.getItem('currentUser');

    this.datedetails = new Date()
  }
  
  rating: any = 0;

  rate(value: number) {
    if(this.rating === 0){
      this.rating = 0;
    }
    this.rating = value;
  }


  bookingForm = this.fb.group({
    fullName:['',[Validators.required,Validators.pattern('[a-zA-z ]+')]],
    email:['',[Validators.required,Validators.email]],
    numOm:['',[Validators.required]] ,
    date:['',[Validators.required,]] 
    })

  reviewForm=this.fb.group({
    review:['',[Validators.required,]]
  })

  
ngOnInit(): void {

  this.currentEmail = localStorage.getItem('currentEmail');
  this.currentUser = localStorage.getItem('currentUser');
    //fetch pathparam url
this.ar.params.subscribe((data:any)=>{
  this.tourId =data['id']
})
// to get daat of requsted tour
this.ts.viewTour(this.tourId).subscribe((result:any)=>{
  
 this.viewTour=result.tours  
 this.initialAmount=result.tours.price
 this.initialTotal=result.tours.price + this.serviceCharge
})
this.ts.getreview(this.tourId).subscribe((result:any)=>{
  this.vReview=result.reviews
})
}

booking(viewTour:any){
var fullName =this.bookingForm.value.fullName
var email = this.bookingForm.value.email
var numOm = this.bookingForm.value.numOm
var date = this.bookingForm.value.date
if(this.bookingForm.valid){
  if(!localStorage.getItem("token"))
  {
    alert('please login')
    this.router.navigateByUrl("home/login")
    }
  this.ts.booking(fullName,email,numOm,date,viewTour).subscribe((result:any)=>{
    alert(result.message)
this.router.navigateByUrl('home/bookyourtrip')
  },
  (result:any) =>{
   
  
    alert(result.error.message)
    this.router.navigateByUrl('home/register')
  }
  )
}else{
  alert('invalid form')
}

}


  review(viewTour:any){
    var review= this.reviewForm.value.review
    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "")
    if(localStorage.getItem("currentEmail")){
      this.currentEmail = JSON.parse(localStorage.getItem("currentEmail") || "")
    }  
   }
   if(this.reviewForm.valid){
    if(!localStorage.getItem("token"))
    {
      alert('please login')
      this.router.navigateByUrl("home/login")
      }
      this.ts.review(this.currentUser,this.currentEmail,this.datedetails,review,this.rating,viewTour).subscribe((result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
        this.router.navigateByUrl('home/register')
      })
   }else{
    alert('invalid form')
   }
  }
 

}


