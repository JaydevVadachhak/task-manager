import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/dashboard/about/about.component';
import { HelpComponent } from './components/dashboard/help/help.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
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
  {
    path: 'userHome',
    component: HomeComponent,
  },
  {
    path: 'userProfile',
    component: ProfileComponent,
  },
  {
    path: 'userAbout',
    component: AboutComponent,
  },
  {
    path: 'userHelp',
    component: HelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
