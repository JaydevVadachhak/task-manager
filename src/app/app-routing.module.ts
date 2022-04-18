import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/dashboard/about/about.component';
import { HelpComponent } from './components/dashboard/help/help.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UpdateTaskComponent } from './components/dashboard/update-task/update-task.component';
import { AuthLoginGuard } from './guard/auth-login.guard';
import { AuthGuard } from './guard/auth.guard';
import { UpdateUserComponent } from './components/dashboard/update-user/update-user.component';
import { TaskResolver } from './resolver/task.resolver';
import { UserResolver } from './resolver/user.resolver';

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
    resolve: {
      tasks: TaskResolver,
      users: UserResolver,
    },
  },
  {
    path: 'userProfile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    resolve: {
      users: UserResolver,
    },
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
  {
    path: 'tasks/edit/:taskId',
    component: UpdateTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/edit/:userId',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
