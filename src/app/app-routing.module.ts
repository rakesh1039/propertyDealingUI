import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/component/home/home/home.component';
import { LoginComponent } from 'src/component/user/login/login/login.component';
import { RegistrationComponent } from 'src/component/user/registration/registration.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
