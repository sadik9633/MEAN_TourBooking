import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from '../home/service/travel.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  constructor(private ts:TravelService,private fb:FormBuilder ,private router:Router){}

  nLettForm=this.fb.group({
    email:['',[Validators.required,Validators.email]]
  })

  nLett(){
  var email=this.nLettForm.value.email
  if(this.nLettForm.valid){
    if(!localStorage.getItem("token"))
    {
      alert('please login')
      this.router.navigateByUrl("home/login")
      }
  
    this.ts.nLett (email).subscribe((result:any)=>{
  alert(result.message)

    },
    (result:any) =>{
      alert(result.error.message)
      this.router.navigateByUrl('home/register')

    })
  }else{
    alert('invalid form')
  }
  }

  ngOnInit(): void {
    
  }

}
