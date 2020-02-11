import { NgModule } from '@angular/core';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { ChartsOneComponent } from '../pages/charts-one/charts-one.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRouting } from './pages.routing';

@NgModule({
  declarations: [
    ProgressComponent,
    ChartsOneComponent,
    PagesComponent,
    DashboardComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    ProgressComponent,
    ChartsOneComponent
  ],
  imports: [
    SharedModule,
    PagesRouting
  ]
})
export class PagesModule { }
