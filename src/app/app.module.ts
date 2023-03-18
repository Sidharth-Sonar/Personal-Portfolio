import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    NavbarComponent,
    HomeComponent,
    CaseStudiesComponent,
    AboutComponent,
    CatchUpComponent
} from './components';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        CaseStudiesComponent,
        AboutComponent,
        CatchUpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
