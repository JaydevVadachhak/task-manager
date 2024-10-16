import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { HelpComponent } from './components/dashboard/help/help.component';
import { AboutComponent } from './components/dashboard/about/about.component';
import { UpdateTaskComponent } from './components/dashboard/update-task/update-task.component';
import { TaskStatusPipe } from './pipe/task-status.pipe';
import { UpdateUserComponent } from './components/dashboard/update-user/update-user.component';
import { MarkCompleteDirective } from './directive/mark-complete.directive';
import { SortPipe } from './pipe/sort.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomeNavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    HelpComponent,
    AboutComponent,
    UpdateTaskComponent,
    TaskStatusPipe,
    UpdateUserComponent,
    MarkCompleteDirective,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
