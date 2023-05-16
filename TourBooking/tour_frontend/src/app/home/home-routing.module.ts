import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooktripComponent } from './booktrip/booktrip.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { TourComponent } from './tour/tour.component';
import { ViewtourComponent } from './viewtour/viewtour.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{path:'tour', component:TourComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'viewtrip/:id', component:ViewtourComponent},
{path:'bookyourtrip', component:BooktripComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
