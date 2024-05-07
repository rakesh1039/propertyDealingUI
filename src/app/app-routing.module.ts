import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
