import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

// overloading headers as global
const overload={
  headers:new HttpHeaders()
 }


@Injectable({
  providedIn: 'root'
})
export class TravelService {
  database:any
  currentUser:any
  currentEmail:any
  userDetails:any
  currentToken:any

  //to hold search key 
  searchKey = new BehaviorSubject('')
bookingItemArray=[]
bookingItemList=new BehaviorSubject([])
  constructor(private http:HttpClient) {

   }

   saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
    }
    if(this.currentEmail){
      localStorage.setItem("currentEmail",JSON.stringify(this.currentEmail))
    }
    if(this.currentToken){
      localStorage.setItem("currentToken",JSON.stringify(this.currentToken))
    }

  }

  getToken(){
    //access token
    const token=JSON.parse(localStorage.getItem("token") || "" )

    //generate header
    let headers=new HttpHeaders()

    if(token){
      //append token in header
      overload.headers=headers.append("access_token",token)
    }
    return overload
  }



  //register
  register(username:any,email:any,password:any){
    //create body data
    const data={username,email,password}
    return this.http.post('http://localhost:3000/register',data)
    
  }


  //login
  login(email: any,password: any){
    //create body data
    const data={email,password}
    return this.http.post('http://localhost:3000/login',data)
}

//newsleeter
nLett(email:any){
  const data={email}
  return this.http.post('http://localhost:3000/newLett',data,this.getToken())
}

//booking
booking(fullName:any,email:any,numOm:any,date:any,tour:any){
  const data={fullName,email,numOm,date,tour}
  return this.http.post('http://localhost:3000/booking',data,this.getToken())
}

//review
review(name:any,email:any,date:any,review:any,rating:any,tourId:any){
  const data={name,email,date,review,rating,tourId}
 return this.http.post('http://localhost:3000/review',data,this.getToken())
}

  //all-tours api
  getAllTours(){
    return this.http.get('http://localhost:3000/all-tours')
  }

  //view-tour api
  
  viewTour(tourId:any){
return this.http.get('http://localhost:3000/view-tour/'+tourId)
  }

  getbooking(email:any){
    const data={email}
    return this.http.post('http://localhost:3000/getbooking',data,this.getToken())
  }


 getreview(tourId:any){

  return this.http.get('http://localhost:3000/getreview/'+tourId)
 }

}
