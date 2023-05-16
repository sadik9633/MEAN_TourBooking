import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginStatus=false
 // userDetails:any={
   // "sadik@gmail.com":{email:"sadik@gmail.com",username:"sadik",password:"abc123"},
    //"anu@gmail.com":{email:"anu@gmail.com",username:"anu",password:"abc123"},
    //"amal@gmail.com":{email:"amal@gmail.com",username:"amal",password:"abc123"}
// }

  constructor(private router:Router,private ts:TravelService,private fb:FormBuilder){}

//model form
loginForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password :['',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9a-zA-z^^!"§$%&/()=?´´+*#-_.:, ]+')]] 
  })

  ngOnInit(): void {
    
  }
  login(){
    var email=this.loginForm.value.email
   var password=this.loginForm.value.password
   if(this.loginForm.valid){
    this.ts.login(email,password).subscribe
    ((result:any)=>{
     
     localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
     localStorage.setItem("currentEmail",JSON.stringify(result. currentEmail))
     localStorage.setItem("token",JSON.stringify(result.token))
   
     alert(result.message)
     this.router.navigateByUrl('home')
     this.loginStatus=true
    },
    (result:any)=>{
     alert(result.error.message)
     this.loginStatus=true

    })
    }
    else{
     alert('invalid form')
    }
   
  }
}
