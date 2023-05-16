import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(private ts:TravelService,private router:Router,private fb:FormBuilder) {}

  //reactive registraion
  registerForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-z ]+')]],
    email:['',[Validators.required,Validators.email]],
    password :['',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9a-zA-z^^!"§$%&/()=?´´+*#-_.:, ]+')]] 
    })


  ngOnInit(): void {
}

register() {

  var username = this.registerForm.value.username
  var email = this.registerForm.value.email
  var password = this.registerForm.value.password
if(this.registerForm.valid){
  this.ts.register(username,email,password).subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl("home/login")
  },
 ( result:any)=>{
    alert(result.error.message)
    this.router.navigateByUrl("home/login")
  }
  )

 
}
else{
  alert ('invalid form')
}
}

    

}

