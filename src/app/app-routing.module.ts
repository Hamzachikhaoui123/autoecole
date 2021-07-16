import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { ClientComponent } from './components/public/admin/client/client.component';
import { RegisterComponent } from './components/register/register.component';
import { DashbordComponent } from './components/shared/dashbord/dashbord.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
 
  {
    path: "dashbord",
    component:DashbordComponent
  },
  {
    path:"admin",
    children:[
    {
      path:"clientlist",
      component:ClientComponent
    },
    {
      path:"**",
      component:Page404Component
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
