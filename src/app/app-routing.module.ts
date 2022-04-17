import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/dashboard/about/about.component';
import { HelpComponent } from './components/dashboard/help/help.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AuthLoginGuard } from './guard/auth-login.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginUserComponent,
    canActivate: [AuthLoginGuard],
  },
  {
    path: 'userRegister',
    component: RegisterUserComponent,
  },
  {
    path: 'userLogin',
    component: LoginUserComponent,
    canActivate: [AuthLoginGuard],
  },
  {
    path: 'userHome',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'userProfile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'userAbout',
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'userHelp',
    component: HelpComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
