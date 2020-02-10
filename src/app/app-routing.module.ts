import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ChartsOneComponent } from './pages/charts-one/charts-one.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'charts-one', component: ChartsOneComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
