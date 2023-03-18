import { CatchUpComponent } from './components/catch-up/catch-up.component';
import { AboutComponent } from './components/about/about.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { // not needed for this project yet
    //     path:"",
    //     pathMatch:"full",
    //     redirectTo:"/home",
    // },
    // {
    //     path:"home",
    //     component:HomeComponent,
    // },
    // {
    //     path:"case-studies",
    //     component:CaseStudiesComponent,
    // },
    // {
    //     path:"about",
    //     component:AboutComponent,
    // },
    // {
    //     path:"catch-up",
    //     component:CatchUpComponent,
    // },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
