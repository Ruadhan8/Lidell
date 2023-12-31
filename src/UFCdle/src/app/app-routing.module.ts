import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { BoardComponent } from './components/board/board.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VersusComponent } from './components/versus/versus.component';
import {DailyComponent } from './components/daily/daily.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  { path: 'http://idell-20230401214430-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'board', component: BoardComponent},
  { path: 'home', component: HomePageComponent},
  {path: 'versus', component:VersusComponent},
  {path: 'daily', component:DailyComponent},
  { path: 'stats', component:StatsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
