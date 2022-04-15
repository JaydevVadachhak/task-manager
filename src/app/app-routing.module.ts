import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginUserComponent,
  },
  {
    path: 'userRegister',
    component: RegisterUserComponent,
  },
  {
    path: 'userLogin',
    component: LoginUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
