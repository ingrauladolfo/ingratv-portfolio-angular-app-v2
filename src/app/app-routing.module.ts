import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyHomeComponent } from './company/pages/company-home/company-home.component';
import { RnetProjectsComponent } from './company/pages/rnet-projects/rnet-projects.component';
import { ROBEMEXProjectsComponent } from './company/pages/robemex-projects/robemex-projects.component';
import { HomeComponent } from './home/components/home/home.component';
import { TatichstudioProjectsComponent } from './company/pages/tatichstudio-projects/tatichstudio-projects.component';
import { AboutHomeComponent } from './about/pages/about-home/about-home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'companies', component:CompanyHomeComponent},
  {path:'companies/projects/robemex', component:ROBEMEXProjectsComponent},
  {path:'companies/projects/rnet', component:RnetProjectsComponent},
  {path:'companies/projects/tatich-studio', component:TatichstudioProjectsComponent},
  {path:'about', component:AboutHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
