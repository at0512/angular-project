import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomecomponentComponent } from './homecomponent/homecomponent.component'; 
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'', component: LoginComponent}, 
 {path:'home', component:HomecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
