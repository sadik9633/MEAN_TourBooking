import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TourComponent } from './tour/tour.component';
import { RegisterComponent } from './register/register.component';

import { ViewtourComponent } from './viewtour/viewtour.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {  FilterPipe } from './pipess/filter.pipe';
import { LoginComponent } from './login/login.component';
import { BooktripComponent } from './booktrip/booktrip.component';


@NgModule({
  declarations: [
    HomeComponent,
    TourComponent,
    RegisterComponent,
    LoginComponent,
    BooktripComponent,
    ViewtourComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  
    
  ],

})
export class HomeModule { }
