import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../home/service/travel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
user=''
  constructor( private router:Router) {
   
  }
  ngOnInit(): void {
    if(localStorage.getItem("currentUser")){
      this.user = JSON.parse(localStorage.getItem("currentUser") || "")
      }

  }
  
  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentEmail")
    localStorage.removeItem("token")
    alert('logout successfully')
    this.router.navigateByUrl("home/login")
  }
}
